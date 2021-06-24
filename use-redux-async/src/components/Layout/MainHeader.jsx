import { useDispatch } from "react-redux";

import { toggle } from "./../../store/ui-state-slice";
import CartButton from "./../Cart/CartButton";
import styles from "./MainHeader.module.scss";

const MainHeader = (props) => {
	const dispatch = useDispatch();

	const toggleCartHandler = (event) => {
		event.preventDefault();
		dispatch(toggle());
	};

	return (
		<header className={styles.header}>
			<h1>ReduxCart</h1>
			<nav>
				<ul>
					<li>
						<CartButton onClick={toggleCartHandler} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
