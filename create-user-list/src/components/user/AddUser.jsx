import React, { useState } from "react";

import Button from "./../ui/Button";
import Card from "./../ui/Card";
import ErrorModal from "./../ui/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [errorState, setErrorState] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		if (!username.trim() || !age.trim() || +age < 1) {
			setErrorState({
				title: "Invalid Input",
				content:
					age && +age < 1
						? "Please enter an age greater than 0"
						: "Please enter both username and age",
			});

			return;
		}

		props.onAddUser(username, age);
		setUsername("");
		setAge("");
	};

	const changeUsernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const changeAgeHandler = (event) => {
		setAge(event.target.value);
	};

	const resetErrorState = () => {
		setErrorState(null);
	};

	return (
		<div>
			{errorState && (
				<ErrorModal
					title={errorState.title}
					content={errorState.content}
					onConfirm={resetErrorState}
				></ErrorModal>
			)}
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
		</div>
	);
};

export default AddUser;
