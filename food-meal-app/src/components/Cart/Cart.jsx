import React, { useContext, useState } from "react";

import CartContext from "./../../store/cart-context";
import Modal from "./../UI/Modal";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import { Checkout } from "./Checkout";

const Cart = (props) => {
	const cartContext = useContext(CartContext);
	const [showCheckout, setShowCheckout] = useState(false);

	const onAddHandler = (item) => cartContext.addItem(item);
	const onRemoveHandler = (id) => cartContext.removeItem(id);
	const orderHandler = () => {
		setShowCheckout(true);
	};
	const hideCheckoutHandler = () => {
		setShowCheckout(false);
		props.onHideCart();
	};

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
			{showCheckout && <Checkout onCancelClick={hideCheckoutHandler} />}
			{!showCheckout && (
				<div className={styles.actions}>
					<button
						className={styles["button--alt"]}
						onClick={props.onHideCart}
					>
						Close
					</button>
					{!!cartContext.items.length && (
						<button
							className={styles.button}
							onClick={orderHandler}
						>
							Order
						</button>
					)}
				</div>
			)}
		</Modal>
	);
};

export default Cart;
