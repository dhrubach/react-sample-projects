import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import { Comments } from "./../components/comments/Comments";
import { HighlightedQuote } from "./../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();

	const quote = DUMMY_QUOTES.find((dquote) => dquote.id === params.quoteId);
	if (!quote) {
		return <p>No quotes found !!</p>;
	}

	return (
		<div>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<div className="centered">
				<Link className="btn--flat" to={`${match.url}/comments`}>
					Load Comments
				</Link>
			</div>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};

export { QuoteDetail };
