import { useRef } from "react";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "./QuoteForm.module.scss";

const QuoteForm = (props) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={submitFormHandler}>
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
					<textarea id="text" rows="5" ref={textInputRef}></textarea>
				</div>
				<div className={styles.actions}>
					<button className="btn">Add Quote</button>
				</div>
			</form>
		</Card>
	);
};

export { QuoteForm };
