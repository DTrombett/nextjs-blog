import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import DateComponent from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

const Home = ({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}) => (
	<Layout home>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<section className={utilStyles.headingMd}>
			<p>I&apos;m DTrombett, a really nice guy who likes to code.</p>
			<p>
				(This is a sample website - you’ll be building a site like this in{" "}
				<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
			</p>
		</section>
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>Blog</h2>
			<ul className={utilStyles.list}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<DateComponent dateString={date} />
						</small>
					</li>
				))}
			</ul>
		</section>
	</Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		allPostsData: await getSortedPostsData(),
	},
});

export default Home;
