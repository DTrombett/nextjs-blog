import "@fortawesome/fontawesome-free/css/all.min.css";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import DateComponent from "../components/DateComponent";
import Layout, { personalDescription, siteTitle } from "../components/Layout";
import LinkButton from "../components/LinkButton";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import type { HomeOptions, Props } from "../types";

const Home = ({ allPostsData }: HomeOptions) => (
	<>
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.description}`}>
				<p>I&apos;m D Trombett, {personalDescription}.</p>
			</section>
			<div
				className={`${utilStyles.buttonsDiv} ${utilStyles.centered} buttons`}
			>
				<LinkButton href="https://discord.gg/uuHajVFAh5" className="is-link">
					<span className="icon">
						<i className="fab fa-discord" />
					</span>
					<span>Discord</span>
				</LinkButton>
				<LinkButton
					href="https://github.com/dtrombett"
					className={`${utilStyles.github} is-link`}
				>
					<span className="icon">
						<i className="fab fa-github" />
					</span>
					<span>GitHub</span>
				</LinkButton>
				<LinkButton
					href="https://reddit.com/u/dtrombett"
					className={`${utilStyles.reddit} is-link`}
				>
					<span className="icon">
						<i className="fab fa-reddit" />
					</span>
					<span>Reddit</span>
				</LinkButton>
				<LinkButton
					href="https://youtube.com/channel/UCClAw4ngK_uwjqzxwcuj97Q"
					className={`${utilStyles.youtube} is-link`}
				>
					<span className="icon">
						<i className="fab fa-youtube" />
					</span>
					<span>YouTube</span>
				</LinkButton>
			</div>
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
		<footer className="footer">
			<i>
				This is a sample website - you’ll be building a site like this in{" "}
				<a href="https://nextjs.org/learn">our Next.js tutorial</a>
			</i>
		</footer>
	</>
);

export const getStaticProps: GetStaticProps = async (): Promise<
	Props<HomeOptions>
> => ({
	props: {
		allPostsData: await getSortedPostsData(),
	},
});

export default Home;
