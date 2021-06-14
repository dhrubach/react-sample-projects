import React, { useState } from "react";

import Button from "./components/UI/Button";
import Message from "./components/UI/Message";

function App() {
	console.log(`re-evaluating app component`);
	const [showParagraph, setShowParagraph] = useState(false);

	const toggleParagraphContainer = () => {
		setShowParagraph((prevStateValue) => !prevStateValue);
	};

	return (
		<main>
			<h1>Hello World!</h1>
			<Message showMessage={false}></Message>
			<Button click={toggleParagraphContainer}>Toggle Message</Button>
		</main>
	);
}

export default App;
