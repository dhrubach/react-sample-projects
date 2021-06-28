import styles from "./CommentItem.module.scss";

const CommentItem = (props) => {
	return (
		<li className={styles.item}>
			<p>{props.text}</p>
		</li>
	);
};

export default CommentItem;
