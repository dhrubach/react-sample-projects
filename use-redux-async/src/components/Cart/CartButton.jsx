import { useSelector } from "react-redux";

import styles from "./CartButton.module.scss";

const CartButton = (props) => {
	const totalItems = useSelector((state) => state.cart.totalItems);

	return (
		<button className={styles.button} onClick={props.onClick}>
			<span>My Cart</span>
			<span className={styles.badge}>{totalItems}</span>
		</button>
	);
};

export default CartButton;
