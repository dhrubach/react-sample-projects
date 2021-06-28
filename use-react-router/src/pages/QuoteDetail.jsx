import { Route, useParams } from "react-router-dom";

import { Comments } from "./../components/comments/Comments";

const QuoteDetail = () => {
	const params = useParams();

	return (
		<div>
			<h1>Quotes Details Page</h1>
			<h2>{JSON.stringify(params)}</h2>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};

export { QuoteDetail };
