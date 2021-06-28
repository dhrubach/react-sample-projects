import { Fragment } from "react";

import styles from "./Layout.module.scss";
import { MainNavigation } from "./MainNavigation";

const Layout = (props) => {
	return (
		<Fragment>
			<MainNavigation />
			<main className={styles.main}>{props.children}</main>
		</Fragment>
	);
};

export { Layout };
