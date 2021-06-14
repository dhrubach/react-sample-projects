import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button";
import DemoList from "./components/Demo/DemoList";
import Message from "./components/UI/Message";

function App() {
	console.log(`re-evaluating app component`);
	const [showParagraph, setShowParagraph] = useState(false);

	const toggleParagraphContainer = useCallback(() => {
		console.log(`executing callback`);
		setShowParagraph((prevStateValue) => !prevStateValue);
	}, []);

	const memoizedList = useMemo(() => [4, 7, 3, 9, 1], []);

	return (
		<main>
			<h1>Hello World!</h1>
			<Message showMessage={false}></Message>
			<Button click={toggleParagraphContainer}>Toggle Message</Button>
			<DemoList items={memoizedList} title="Demo List" />
		</main>
	);
}

export default App;
