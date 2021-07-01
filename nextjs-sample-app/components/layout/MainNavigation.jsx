import styles from "./MainNavigation.module.scss";

function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add New Meetup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export { MainNavigation };
