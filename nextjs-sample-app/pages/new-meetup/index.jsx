import { NewMeetupForm } from "./../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
	const addMeetupHandler = (data) => {
		console.log(data);
	};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
