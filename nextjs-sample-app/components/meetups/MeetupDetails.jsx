import styles from "./MeetupDetails.module.scss";

const MeetupDetails = () => {
	return (
		<section className={styles.detail}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/1_Manhattan%2C_New_York_City.jpg/1280px-1_Manhattan%2C_New_York_City.jpg"
				alt="First Meetup"
			/>
			<h1>First Meetup</h1>
			<address>NY, 11000</address>
			<p>Meeting Description</p>
		</section>
	);
};

export { MeetupDetails };
