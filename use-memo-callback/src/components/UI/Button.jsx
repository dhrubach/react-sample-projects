import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
	console.log("re-evaluating button component");

	return (
		<button className={styles["primary-button"]} onClick={props.click}>
			{props.children}
		</button>
	);
};

export default React.memo(Button);
