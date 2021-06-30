import { useEffect } from "react";

import { QuoteList } from "./../components/quotes/QuoteList";
import { LoadingSpinner } from "./../components/ui/LoadingSpinner";
import { NoQuotesFound } from "./../components/quotes/NoQuotesFound";
import { useHttp } from "./../hooks/use-http";
import { getAllQuotes } from "./../lib/api";

const AllQuotes = () => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (status === "error") {
		return <p className="centered focused">{error}</p>;
	}

	if (status === "complete" && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />;
	}

	return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export { AllQuotes };
