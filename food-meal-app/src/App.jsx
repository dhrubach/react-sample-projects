import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

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
		<React.Fragment>
			{showCartModal && <Cart onHideCart={showCartStateChange.hide} />}
			<Header onShowCart={showCartStateChange.show} />
			<main>
				<Meals></Meals>
			</main>
		</React.Fragment>
	);
}

export default App;
