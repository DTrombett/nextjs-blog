import type { GetStaticPaths, GetStaticProps } from "next";
import DateComponent from "../../components/DateComponent";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import type { Params, PostFileData, PostOptions, Props } from "../../types";

const Post = ({
	postData: { contentHtml, contentMarkdown, date, title },
}: PostOptions) => (
	<Layout description={contentMarkdown} title={title}>
		<article>
			<h1 className={utilStyles.headingXl}>{title}</h1>
			<div className={utilStyles.lightText}>
				<DateComponent dateString={date} />
			</div>
			<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
		</article>
	</Layout>
);

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: await getAllPostIds(),
	fallback: false,
});

export const getStaticProps: GetStaticProps = async ({
	params,
}: Params<PostFileData>): Promise<Props<PostOptions>> => ({
	props: {
		postData: await getPostData(params.id),
	},
});

export default Post;
