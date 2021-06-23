import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, toggle } from "./../store/counter-slice";
import styles from "./Counter.module.scss";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.value);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const toggleCounterHandler = () => dispatch(toggle());
	const incrementHandler = () => dispatch(increment());
	const decrementHandler = () => dispatch(decrement());

	return (
		<main className={styles.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={styles.value}>{counter}</div>}
			{!showCounter && (
				<div className={styles.value}>-- COUNTER VALUE --</div>
			)}
			<div className={styles.action}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export { Counter };
