import React from "react";

import Card from "./../ui/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">User</label>
				<input type="text" name="username" id="username" />

				<label htmlFor="age">Age</label>
				<input type="number" name="age" id="age" />

				<button type="submit">Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;
