import React from "react";

import styles from "./Cart.module.scss";
import Modal from "./../UI/Modal";

const Cart = (props) => {
	const cartItems = [
		{
			id: "c1",
			name: "Sushi",
			amount: 2,
			price: 12.99,
		},
	].map((item) => <li>{item.name}</li>);

	return (
		<Modal>
			<div>
				<ul className={styles["cart-items"]}>{cartItems}</ul>
			</div>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>35.63</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
