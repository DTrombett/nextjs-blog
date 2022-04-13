import type { LinkProps } from "next/link";

export type DateOptions = { dateString: string };
export type LayoutOptions = {
	children: React.ReactNode;
	description?: string;
	home?: boolean;
	imageSquare?: string;
	image?: string;
	title?: string;
};
export type LinkButtonOptions = {
	text?: string;
	href: string;
	className?: string;
	linkProps?: LinkProps;
	children?: React.ReactNode;
};
export type PostData = PostDetails & PostFileData;
export type Params<T> = {
	params: T;
};
export type Props<T> = {
	props: T;
};
export type PostFileData = { id: string };
export type PostDetails = { date: string; title: string };
export type PostContent = PostData & {
	contentHtml: string;
	contentMarkdown: string;
};
export type PostOptions = {
	postData: PostContent;
};
export type HomeOptions = {
	allPostsData: PostData[];
};
