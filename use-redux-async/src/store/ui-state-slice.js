import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { showCart: false },
	reducers: {
		toggle(state) {
			state.showCart = !state.showCart;
		},
	},
});

const { actions, reducer } = uiSlice;

export const { toggle } = actions;

export { reducer as uiReducer };
