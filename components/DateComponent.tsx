import capitalize from "../lib/capitalize";
import type { DateOptions } from "../types";

/**
 * Format a date string to a human readable format.
 */
const DateComponent = ({ dateString }: DateOptions) => {
	const date = new Date(dateString);

	return (
		<time dateTime={dateString}>
			{date.getDate()}{" "}
			{capitalize(date.toLocaleString("default", { month: "long" }))}{" "}
			{date.getFullYear()}
		</time>
	);
};

export default DateComponent;
