import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import { Comments } from "./../components/comments/Comments";
import { HighlightedQuote } from "./../components/quotes/HighlightedQuote";
import { LoadingSpinner } from "./../components/ui/LoadingSpinner";
import { NoQuotesFound } from "./../components/quotes/NoQuotesFound";
import { useHttp } from "./../hooks/use-http";
import { getSingleQuote } from "./../lib/api";

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();
	const {
		sendRequest,
		status,
		data: loadedQuote,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(params.quoteId);
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (status === "complete" && !loadedQuote) {
		return <NoQuotesFound />;
	}

	return (
		<div>
			<HighlightedQuote
				text={loadedQuote.text}
				author={loadedQuote.author}
			/>
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
