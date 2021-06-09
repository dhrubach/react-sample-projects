import React from "react";

import heroImage from "./../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>Sample Food Order App</h1>
				<button>Cart</button>
			</header>
			<div className={styles["main-image"]}>
				<img src={heroImage} alt="A food table" />
			</div>
		</React.Fragment>
	);
};

export default Header;
