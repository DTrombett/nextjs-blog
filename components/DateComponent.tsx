import capitalize from "../lib/capitalize";

/**
 * Format a date string to a human readable format.
 */
const DateComponent = ({ dateString }: { dateString: string }) => {
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
