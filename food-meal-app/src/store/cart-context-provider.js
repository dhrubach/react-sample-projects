import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	let updatedItems;
	let updatedTotalAmount;

	switch (action.type) {
		case "ADD_CART_ITEM":
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);
			const existingItem = state.items[existingItemIndex];

			if (existingItem) {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.item);
			}

			updatedTotalAmount =
				state.totalAmount + action.item.price * action.item.amount;
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};

		case "REMOVE_CART_ITEM":
			const updatedItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);
			const updatedItem = {
				...state.items[updatedItemIndex],
				amount: state.items[updatedItemIndex].amount - 1,
			};

			updatedItems = [...state.items];

			if (updatedItem.amount) {
				updatedItems[updatedItemIndex] = updatedItem;
			} else {
				updatedItems.splice(updatedItemIndex, 1);
			}

			updatedTotalAmount = state.totalAmount - updatedItem.price;

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		default:
			return defaultCartState;
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
