import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

const Backdrop = (props) => {
	return (
		<div className={styles.backdrop} onClick={props.hideCartModal}></div>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop hideCartModal={props.hideCartModal} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</React.Fragment>
	);
};

export default Modal;
