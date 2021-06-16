import React, { useContext } from "react";

import CartContext from "./../../store/cart-context";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import Modal from "./../UI/Modal";

const Cart = (props) => {
	const cartContext = useContext(CartContext);

	const onAddHandler = (item) => cartContext.addItem(item);
	const onRemoveHandler = (id) => cartContext.removeItem(id);

	const cartItems = cartContext.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			price={item.price}
			amount={item.amount}
			onRemove={onRemoveHandler.bind(null, item.id)}
			onAdd={onAddHandler.bind(null, item)}
		/>
	));

	return (
		<Modal hideCartModal={props.onHideCart}>
			<div>
				<ul className={styles["cart-items"]}>{cartItems}</ul>
			</div>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{cartContext.totalAmount.toFixed(2)}</span>
			</div>
			<div className={styles.actions}>
				<button
					className={styles["button--alt"]}
					onClick={props.onHideCart}
				>
					Close
				</button>
				{!!cartContext.items.length && (
					<button className={styles.button}>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
