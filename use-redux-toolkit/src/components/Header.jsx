import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "./../store/auth-slice";
import styles from "./Header.module.scss";

const Header = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const onLogoutHandler = (event) => {
		event.preventDefault();
		dispatch(logout());
	};

	return (
		<header className={styles.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{isAuthenticated && (
						<Fragment>
							<li>
								<a href="/">My Products</a>
							</li>
							<li>
								<a href="/">My Sales</a>
							</li>
						</Fragment>
					)}
					<li>
						<button onClick={onLogoutHandler}>Logout</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
