import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import { counterStore } from "./store/counter-store";

ReactDOM.render(
	<Provider store={counterStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
