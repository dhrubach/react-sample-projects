import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalItems: 0,
		hasChanged: false,
	},
	reducers: {
		replaceItems(state, action) {
			const { items, totalItems } = action.payload;
			state.items = items;
			state.totalItems = totalItems;
			state.hasChanged = false;
		},
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
			state.hasChanged = true;
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
			state.hasChanged = true;
		},
	},
});

const { actions, reducer } = cartSlice;

export const { addItem, removeItem, replaceItems } = actions;
export { reducer as cartReducer };
