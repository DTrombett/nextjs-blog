import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import type { LinkButtonOptions } from "../types";

/**
 * A link button.
 */
const LinkButton = ({
	text,
	href,
	children,
	className = "",
	linkProps,
	target = "_blank",
}: LinkButtonOptions) => (
	<Link passHref href={href} {...linkProps}>
		<a
			className={`button ${utilStyles.removeHoverUnderline} ${className}`}
			target={target}
		>
			{children}
			{text}
		</a>
	</Link>
);

export default LinkButton;
