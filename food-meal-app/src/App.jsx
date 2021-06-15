import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cart-context-provider";

function App() {
	const [showCartModal, setShowCartModal] = useState(false);

	const showCartStateChange = {
		show: () => {
			setShowCartModal(true);
		},
		hide: () => {
			setShowCartModal(false);
		},
	};

	return (
		<CartProvider>
			{showCartModal && <Cart onHideCart={showCartStateChange.hide} />}
			<Header onShowCart={showCartStateChange.show} />
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
