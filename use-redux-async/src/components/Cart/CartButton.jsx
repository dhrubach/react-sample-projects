import styles from "./CartButton.module.scss";

const CartButton = (props) => {
	return (
		<button className={styles.button} onClick={props.onClick}>
			<span>My Cart</span>
			<span className={styles.badge}>1</span>
		</button>
	);
};

export default CartButton;
