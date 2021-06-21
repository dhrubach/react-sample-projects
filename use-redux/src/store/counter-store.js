import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + 1,
			};

		case "decrement":
			return {
				...state,
				counter: state.counter - 1,
			};

		default:
			return {
				...counter,
			};
	}
};

const counterStore = redux.createStore(counterReducer);

export { counterStore };
