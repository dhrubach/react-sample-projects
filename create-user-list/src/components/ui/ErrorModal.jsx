import React from "react";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	return (
		<div>
			<div className={styles.backdrop} onClick={props.onConfirm}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.content}</p>
				</div>
				<footer className={styles.actions}>
					<Button type="button" onButtonClick={props.onConfirm}>
						Confirm
					</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
