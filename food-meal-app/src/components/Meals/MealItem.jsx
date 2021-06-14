import React from "react";

import styles from "./MealItem.module.scss";
import MealItemForm from "./MealtemForm";

const MealItem = (props) => {
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>${props.price.toFixed(2)}</div>
			</div>
			<MealItemForm id={props.id}></MealItemForm>
		</li>
	);
};

export default MealItem;
