import styles from "./HighlightedQuote.module.scss";

const HighlightedQuote = (props) => {
	return (
		<figure className={styles.quote}>
			<p>{props.text}</p>
			<figcaption>{props.author}</figcaption>
		</figure>
	);
};

export { HighlightedQuote };
