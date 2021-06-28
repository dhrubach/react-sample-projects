import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.scss";

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Great Quotes</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink to="/quotes" activeClassName={styles.active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/add-quote"
							activeClassName={styles.active}
						>
							Add New Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { MainNavigation };
