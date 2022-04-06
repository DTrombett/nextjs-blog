import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import DateComponent from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}) => (
	<Layout>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<article>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				<DateComponent dateString={postData.date} />
			</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	</Layout>
);

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: await getAllPostIds(),
	fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		postData: await getPostData(params!.id as string),
	},
});

export default Post;
