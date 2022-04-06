import { format, parseISO } from "date-fns";

const DateComponent = ({ dateString }: { dateString: string }) => (
	<time dateTime={dateString}>
		{format(parseISO(dateString), "LLLL d, yyyy")}
	</time>
);

export default DateComponent;
