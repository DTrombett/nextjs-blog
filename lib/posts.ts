import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { remark } from "remark";
import html from "remark-html";
import type {
	Params,
	PostContent,
	PostData,
	PostDetails,
	PostFileData,
} from "../types";

const postsDirectory = join(cwd(), "posts");

/**
 * Get the data of all the posts.
 * @returns An array of posts
 */
export const getSortedPostsData = async (): Promise<PostData[]> =>
	Promise.all(
		(await readdir(postsDirectory)).map((fileName) =>
			readFile(join(postsDirectory, fileName), "utf8").then((fileContents) => ({
				id: fileName.replace(/\.md$/, ""),
				...(matter(fileContents).data as PostDetails),
			}))
		)
	).then((allPostsData) =>
		allPostsData.sort((a, b) =>
			a.date < b.date ? 1 : a.date > b.date ? -1 : 0
		)
	);

/**
 * Get the id of all the posts.
 * @returns An array of post ids
 */
export const getAllPostIds = (): Promise<Params<PostFileData>[]> =>
	readdir(postsDirectory).then((postIds) =>
		postIds.map((fileName) => ({
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		}))
	);

/**
 * Get the data of a single post.
 * @param id - The id of the post
 * @returns The data of the post
 */
export const getPostData = async (id: string): Promise<PostContent> => {
	const matterResult = matter(
		await readFile(join(postsDirectory, `${id}.md`), "utf8")
	);

	return {
		id,
		contentHtml: await remark()
			.use(html)
			.process(matterResult.content)
			.then((result) => result.toString()),
		contentMarkdown: matterResult.content,
		...(matterResult.data as { date: string; title: string }),
	};
};
