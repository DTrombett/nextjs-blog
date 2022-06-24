import type { LinkProps } from "next/link";

export type DateOptions = { dateString: string };
export type HomeOptions = {
	allPostsData: PostData[];
};
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
	target?: string;
};
export type Params<T> = {
	params: T;
};
export type PostContent = PostData & {
	contentHtml: string;
	contentMarkdown: string;
};
export type PostData = PostDetails & PostFileData;
export type PostDetails = { date: string; title: string };
export type PostFileData = { id: string };
export type PostOptions = {
	postData: PostContent;
};
export type Props<T> = {
	props: T;
};
