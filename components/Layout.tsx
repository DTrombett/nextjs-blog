import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/profile.png";
import utilStyles from "../styles/utils.module.css";
import type { LayoutOptions } from "../types";
import styles from "./layout.module.css";

const name = "D Trombett";
export const siteTitle = "DTrombett Blog";
export const personalDescription = "a really nice guy who likes to code";

/**
 * The base layout.
 */
const Layout = ({
	children,
	description = `DTrombett's personal blog, ${personalDescription}.`,
	home = false,
	imageSquare = "/images/profile.png",
	image = "/images/banner.png",
	title = siteTitle,
}: LayoutOptions) => (
	<div className={styles.container}>
		<Head>
			<meta name="description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageSquare} />
			<meta name="twitter:title" content={title} />
			<title>{title}</title>
		</Head>
		<header className={styles.header}>
			{home ? (
				<>
					<Image
						priority
						src={profilePic}
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt={name}
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
				</>
			) : (
				<>
					<Link href="/">
						<a>
							<Image
								priority
								src="/images/profile.png"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt={name}
							/>
						</a>
					</Link>
					<h2 className={utilStyles.headingLg}>
						<Link href="/">
							<a className={utilStyles.colorInherit}>{name}</a>
						</Link>
					</h2>
				</>
			)}
		</header>
		<main>{children}</main>
		{!home && (
			<div className={styles.backToHome}>
				<Link href="/">
					<a>← Back to home</a>
				</Link>
			</div>
		)}
	</div>
);

export default Layout;
