import styles from "./Counter.module.scss";

const Counter = () => {
	const toggleCounterHandler = () => {};

	return (
		<main className={styles.counter}>
			<h1>Redux Counter</h1>
			<div className={styles.value}>-- COUNTER VALUE --</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export { Counter };
