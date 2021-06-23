import { useSelector } from "react-redux";
import { Fragment } from "react";

import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Fragment>
			<Header />
			{isAuthenticated ? <UserProfile /> : <Auth />}
			<Counter />
		</Fragment>
	);
}

export default App;
