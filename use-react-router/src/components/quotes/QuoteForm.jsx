import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "./QuoteForm.module.scss";

const QuoteForm = (props) => {
	const [isEntering, setIsEntering] = useState(false);
	const authorInputRef = useRef();
	const textInputRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const formFocusHandler = () => {
		setIsEntering(true);
	};

	const resetEnteringState = () => {
		setIsEntering(false);
	};

	return (
		<Fragment>
			<Prompt
				when={isEntering}
				message={`Data will be lost if you navigate away for the page`}
			></Prompt>
			<Card>
				<form
					onFocus={formFocusHandler}
					className={styles.form}
					onSubmit={submitFormHandler}
				>
					{props.isLoading && (
						<div className={styles.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={styles.control}>
						<label htmlFor="author">Author</label>
						<input type="text" id="author" ref={authorInputRef} />
					</div>
					<div className={styles.control}>
						<label htmlFor="text">Text</label>
						<textarea
							id="text"
							rows="5"
							ref={textInputRef}
						></textarea>
					</div>
					<div className={styles.actions}>
						<button onClick={resetEnteringState} className="btn">
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export { QuoteForm };
