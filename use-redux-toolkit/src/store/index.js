import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth-slice";
import { counterReducer } from "./counter-slice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		counter: counterReducer,
	},
});

export default store;
