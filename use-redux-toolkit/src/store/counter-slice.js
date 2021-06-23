import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const { actions, reducer } = counterSlice;

export const { decrement, increment, toggle } = actions;
export { reducer as counterReducer };
