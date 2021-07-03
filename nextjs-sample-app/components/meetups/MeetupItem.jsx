import { useRouter } from "next/router";

import { Card } from "../ui/Card";
import styles from "./MeetupItem.module.scss";

function MeetupItem(props) {
	const router = useRouter();

	const showDetailsHandler = () => {
		router.push(`/${props.id}`);
	};

	return (
		<li className={styles.item}>
			<Card>
				<div className={styles.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={styles.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div className={styles.actions}>
					<button onClick={showDetailsHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export { MeetupItem };
