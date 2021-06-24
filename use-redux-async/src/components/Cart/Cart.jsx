import { useSelector } from "react-redux";

import Card from "../UI/Card";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = (props) => {
	const itemsInCart = useSelector((state) => state.cart.items);

	return (
		<Card className={styles.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{itemsInCart.map((item) => (
					<CartItem
						key={item.id}
						item={{
							id: item.id,
							title: item.title,
							quantity: item.quantity,
							total: item.total,
							price: item.price,
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
