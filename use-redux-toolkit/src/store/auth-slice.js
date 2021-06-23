import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

const { actions, reducer } = authSlice;

export const { login, logout } = actions;
export { reducer as authReducer };
