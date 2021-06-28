import styles from "./QuoteItem.module.scss";

const QuoteItem = (props) => {
	return (
		<li className={styles.item}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<a className="btn">View Fullscreen</a>
		</li>
	);
};

export default QuoteItem;
