import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = join(cwd(), "posts");

export const getSortedPostsData = async () =>
	Promise.all(
		(await readdir(postsDirectory)).map((fileName) =>
			readFile(join(postsDirectory, fileName), "utf8").then((fileContents) => ({
				id: fileName.replace(/\.md$/, ""),
				...(matter(fileContents).data as { date: string; title: string }),
			}))
		)
	).then((allPostsData) =>
		allPostsData.sort((a, b) =>
			a.date < b.date ? 1 : a.date > b.date ? -1 : 0
		)
	);

export const getAllPostIds = () =>
	readdir(postsDirectory).then((postIds) =>
		postIds.map((fileName) => ({
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		}))
	);

export const getPostData = async (id: string) => {
	const matterResult = matter(
		await readFile(join(postsDirectory, `${id}.md`), "utf8")
	);

	return {
		id,
		contentHtml: await remark()
			.use(html)
			.process(matterResult.content)
			.then((result) => result.toString()),
		...(matterResult.data as { date: string; title: string }),
	};
};
