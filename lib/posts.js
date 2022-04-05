import matter from "gray-matter";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = join(cwd(), "posts");

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = join(postsDirectory, fileName);
		const fileContents = readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			.../** @type {{date: number}} */ (matterResult.data),
		};
	});
	// Sort posts by date
	return allPostsData.sort(({ date: a }, { date: b }) => b - a);
}

export function getAllPostIds() {
	const fileNames = readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

/**
 * @param {string} id
 */
export async function getPostData(id) {
	const fullPath = join(postsDirectory, `${id}.md`);
	const fileContents = readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);
	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
