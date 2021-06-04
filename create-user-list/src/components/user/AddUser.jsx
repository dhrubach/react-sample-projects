import React, { useState } from "react";

import Button from "./../ui/Button";
import Card from "./../ui/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();

		if (!username.trim() || !age.trim() || +age < 1) {
			return;
		}

		setUsername("");
		setAge("");
	};

	const changeUsernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const changeAgeHandler = (event) => {
		setAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">User</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={changeUsernameHandler}
				/>

				<label htmlFor="age">Age</label>
				<input
					type="number"
					name="age"
					id="age"
					value={age}
					onChange={changeAgeHandler}
				/>

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
