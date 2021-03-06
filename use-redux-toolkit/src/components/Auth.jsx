import { useDispatch } from "react-redux";

import { login } from "./../store/auth-slice";
import styles from "./Auth.module.scss";

const Auth = () => {
	const dispatch = useDispatch();

	const onLoginHandler = (event) => {
		event.preventDefault();
		dispatch(login());
	};

	return (
		<main className={styles.auth}>
			<section>
				<form>
					<div className={styles.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div className={styles.control}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button onClick={onLoginHandler}>Login</button>
				</form>
			</section>
		</main>
	);
};

export { Auth };
