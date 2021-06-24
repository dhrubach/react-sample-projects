import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalItems: 0,
	},
	reducers: {
		addItem(state, action) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.quantity++;
				existingItem.total = existingItem.total + action.payload.price;
			} else {
				const { id, title, price, description } = action.payload;
				state.items.push({
					id,
					title,
					price,
					description,
					quantity: 1,
					total: price,
				});
			}

			state.totalItems++;
		},
		removeItem(state, action) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.quantity--;
				existingItem.total = existingItem.total - action.payload.price;
				state.items = state.items.filter((item) => item.quantity > 0);
			}

			state.totalItems--;
		},
	},
});

const { actions, reducer } = cartSlice;

export const { addItem, removeItem } = actions;
export { reducer as cartReducer };
