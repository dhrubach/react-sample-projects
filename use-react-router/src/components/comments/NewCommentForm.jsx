import { useRef } from "react";

import styles from "./NewCommentForm.module.scss";

const NewCommentForm = (props) => {
	const commentTextRef = useRef();

	const submitFormHandler = (event) => {
		event.preventDefault();

		// optional: Could validate here

		// send comment to server
	};

	return (
		<form className={styles.form} onSubmit={submitFormHandler}>
			<div className={styles.control} onSubmit={submitFormHandler}>
				<label htmlFor="comment">Your Comment</label>
				<textarea id="comment" rows="5" ref={commentTextRef}></textarea>
			</div>
			<div className={styles.actions}>
				<button className="btn">Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
