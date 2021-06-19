import React, { useRef, useState } from "react";

import styles from "./Checkout.module.scss";

const Checkout = (props) => {
	const [formValidity, setFormValidity] = useState({
		name: true,
		city: true,
		street: true,
		pcode: true,
	});
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const cityInputRef = useRef();
	const pcodeInputRef = useRef();

	const onFormSubmit = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredPostalCode = pcodeInputRef.current.value;

		const enteredNameIsValid = enteredName.trim() !== "";
		const enteredStreetIsValid = enteredStreet.trim() !== "";
		const enteredCityIsValid = enteredCity.trim() !== "";
		const enteredPCodeIsValid =
			enteredPostalCode.trim() !== "" && enteredPostalCode.length === 5;

		setFormValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			pcode: enteredPCodeIsValid,
		});

		const isFormValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredCityIsValid &&
			enteredPCodeIsValid;

		if (!isFormValid) {
			return;
		}
	};

	return (
		<form className={styles.form} onSubmit={onFormSubmit}>
			<div
				className={`${styles.control} ${
					formValidity.name ? "" : styles.invalid
				}`}
			>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
			</div>
			<div
				className={`${styles.control} ${
					formValidity.street ? "" : styles.invalid
				}`}
			>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
			</div>
			<div
				className={`${styles.control} ${
					formValidity.city ? "" : styles.invalid
				}`}
			>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
			</div>
			<div
				className={`${styles.control} ${
					formValidity.pcode ? "" : styles.invalid
				}`}
			>
				<label htmlFor="pcode">Postal Code</label>
				<input type="text" id="pcode" ref={pcodeInputRef} />
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancelClick}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	);
};

export { Checkout };
