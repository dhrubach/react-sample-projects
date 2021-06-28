import styles from "./NoQuotesFound.module.scss";

const NoQuotesFound = () => {
	return (
		<div className={styles.noquotes}>
			<p>No quotes found!</p>
			<a className="btn">Add a Quote</a>
		</div>
	);
};

export default NoQuotesFound;
