import type { LinkProps } from "next/link";
import Link from "next/link";
import type { HTMLAttributes } from "react";

/**
 * A link button.
 */
const LinkButton = ({
	text,
	buttonProps,
	...props
}: LinkProps & {
	text: string;
	buttonProps?: HTMLAttributes<HTMLButtonElement>;
}) => (
	<Link {...props}>
		<button className="button is-link" {...buttonProps}>
			{text}
		</button>
	</Link>
);

export default LinkButton;
