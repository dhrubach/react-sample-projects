import React, { useRef, useState } from "react";

import Input from "./../UI/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const onSubmitFormHandler = (event) => {
		event.preventDefault();

		const inputAmount = +amountInputRef.current.value ?? 0;
		if (inputAmount < 1 || inputAmount > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(inputAmount);
	};

	return (
		<form className={styles.form} onSubmit={onSubmitFormHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: `amount_${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			></Input>
			<button type="submit">+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount</p>}
		</form>
	);
};

export default MealItemForm;
