import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
	return (
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
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<Overlay
					title={props.title}
					content={props.content}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</Fragment>
	);
};

export default ErrorModal;
