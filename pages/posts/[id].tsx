import type { GetStaticPaths, GetStaticProps } from "next";
import DateComponent from "../../components/DateComponent";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({
	postData: { contentHtml, contentMarkdown, date, title },
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
		contentMarkdown: string;
	};
}) => (
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

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		postData: await getPostData(params!.id as string),
	},
});

export default Post;
