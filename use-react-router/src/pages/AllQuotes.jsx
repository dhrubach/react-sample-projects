import { QuoteList } from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{
		id: "q1",
		author: "John Doe",
		text: "First Quote",
	},
	{
		id: "q2",
		author: "Jane Doe",
		text: "Second Quote",
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export { AllQuotes };
