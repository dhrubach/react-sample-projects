import { useDispatch } from "react-redux";

import { addItem, removeItem } from "./../../store/cart-slice";
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
	const dispatch = useDispatch();
	const { id, title, quantity, total, price } = props.item;

	const addCartItemHandler = (event) => {
		event.preventDefault();

		dispatch(
			addItem({
				id,
				price,
			})
		);
	};

	const removeCartItemHandler = (event) => {
		event.preventDefault();

		dispatch(
			removeItem({
				id,
				price,
			})
		);
	};

	return (
		<li className={styles.item}>
			<header>
				<h3>{title}</h3>
				<div className={styles.price}>
					${total.toFixed(2)}{" "}
					<span className={styles.itemprice}>
						(${price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={styles.details}>
				<div className={styles.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={styles.actions}>
					<button onClick={removeCartItemHandler}>-</button>
					<button onClick={addCartItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
