import { Link } from "react-router-dom";

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
			<Link className="btn" to={`/quotes/${props.id}`}>
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;
