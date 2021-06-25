import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCartData, postCartData } from "./store/cart-actions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.showCart);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchCartData());
	}, []);

	useEffect(() => {
		if (cart.hasChanged) {
			dispatch(postCartData(cart));
		}
	}, [cart, dispatch]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
