import React, { useContext } from "react";

import CartContext from "./../../store/cart-context";
import CartIcon from "./../Cart/CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce((cur, item) => {
		return cur + item.amount;
	}, 0);

	return (
		<button className={styles.button} onClick={props.onShowCart}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
