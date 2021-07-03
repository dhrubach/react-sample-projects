import { MeetupList } from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		image: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/1_Manhattan%2C_New_York_City.jpg/1280px-1_Manhattan%2C_New_York_City.jpg`,
		title: `First Meetup`,
		address: `4th Avenue Road`,
		description: `First Meetup on React and NextJs`,
	},
	{
		id: "m2",
		image: `https://upload.wikimedia.org/wikipedia/commons/4/41/Dallas_Skyline_with_Arts_District.jpg`,
		title: `Second Meetup`,
		address: `4th Surry Street`,
		description: `Second Meetup on React and NextJs`,
	},
	{
		id: "m3",
		image: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Doha_City%2C_UNCTAD_XIII_(7115124733).jpg/1280px-Doha_City%2C_UNCTAD_XIII_(7115124733).jpg`,
		title: `Third Meetup`,
		address: `41st Pitt Street`,
		description: `Third Meetup on React and NextJs`,
	},
];

const Home = (props) => {
	return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
	return {
		props: {
			meetups: [...DUMMY_MEETUPS],
		},
	};
}

export default Home;
