import React, { useMemo } from "react";

import styles from "./DemoList.module.scss";

const DemoList = (props) => {
	console.log(`re-evaluating demolist component`);

	const { items } = props;
	const sortedList = useMemo(() => {
		return items.sort((a, b) => a - b);
	}, [items]);

	return (
		<div className={styles["demo-list__content"]}>
			<h2>{props.title}</h2>
			<ul className={styles["demo-list__item"]}>
				{sortedList.map((val) => (
					<li>{val}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(DemoList);
