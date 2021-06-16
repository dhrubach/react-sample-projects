import React, { useContext } from "react";

import CartContext from "./../../store/cart-context";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealtemForm";

const MealItem = (props) => {
	const cartContext = useContext(CartContext);
	const addToCartHandler = (amount) => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={styles.meal} key={props.id}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>${props.price.toFixed(2)}</div>
			</div>
			<MealItemForm
				id={props.id}
				onAddToCart={addToCartHandler}
			></MealItemForm>
		</li>
	);
};

export default MealItem;
