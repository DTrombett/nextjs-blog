import { format as formatDate, parseISO } from "date-fns";

/**
 * Format a date string to a human readable format.
 */
const DateComponent = ({
	dateString,
	format = "LLLL d, yyyy",
}: {
	dateString: string;
	format?: string;
}) => (
	<time dateTime={dateString}>{formatDate(parseISO(dateString), format)}</time>
);

export default DateComponent;
