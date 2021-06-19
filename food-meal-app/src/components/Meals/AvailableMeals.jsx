import React, { useCallback, useEffect, useState } from "react";

import styles from "./AvailableMeals.module.scss";
import Card from "./../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
	const [meals, setMeals] = useState([]);

	const fetchMealsHandler = useCallback(async () => {
		const mealsResponse = await fetch(
			`https://react-food-meal-app-default-rtdb.firebaseio.com/meals.json`
		);
		const mealsResponseData = await mealsResponse.json();
		const mealsArray = [];

		Object.keys(mealsResponseData).forEach((prop) => {
			const { name, price, description } = mealsResponseData[prop];
			mealsArray.push({
				key: prop,
				name,
				description,
				price,
			});
		});

		setMeals(mealsArray);
	}, []);

	useEffect(() => {
		fetchMealsHandler();
	}, [fetchMealsHandler]);

	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				id={meal.id}
				key={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			></MealItem>
		);
	});

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
