import type { LinkProps } from "next/link";
import Link from "next/link";

/**
 * A link button.
 */
const LinkButton = ({
	text,
	href,
	children,
	className = "",
	linkProps,
}: {
	text?: string;
	href: string;
	className?: string;
	linkProps?: LinkProps;
	children?: React.ReactNode;
}) => (
	<Link passHref href={href} {...linkProps}>
		<button className={`button ${className}`}>
			{children}
			{text}
		</button>
	</Link>
);

export default LinkButton;
