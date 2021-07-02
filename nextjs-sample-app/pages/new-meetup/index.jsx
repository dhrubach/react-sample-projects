import { Layout } from "./../../components/layout/Layout";
import { NewMeetupForm } from "./../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
	const addMeetupHandler = (data) => {
		console.log(data);
	};

	return (
		<Layout>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Layout>
	);
};

export default NewMeetup;
