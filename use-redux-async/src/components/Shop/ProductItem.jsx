import { useDispatch } from "react-redux";

import Card from "./../UI/Card";
import { addItem } from "./../../store/cart-slice";
import styles from "./ProductItem.module.scss";

const ProductItem = (props) => {
	const dispatch = useDispatch();
	const { id, title, price, description } = props;

	const onAddItemHandler = (event) => {
		event.preventDefault();
		dispatch(
			addItem({
				id,
				title,
				price,
				description,
			})
		);
	};

	return (
		<li className={styles.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={styles.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={styles.actions}>
					<button onClick={onAddItemHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
