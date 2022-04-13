import Link from "next/link";
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
}: LinkButtonOptions) => (
	<Link passHref href={href} {...linkProps}>
		<button className={`button ${className}`}>
			{children}
			{text}
		</button>
	</Link>
);

export default LinkButton;
