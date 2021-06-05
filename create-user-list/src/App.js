import React, { Fragment, useState } from "react";

import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";

function App() {
	const [userList, setUserList] = useState([]);

	const registerNewUserHandler = (name, age) => {
		setUserList((prevUserList) => [
			...prevUserList,
			{ name, age, id: prevUserList.length + 1 },
		]);
	};

	return (
		<Fragment>
			<AddUser onAddUser={registerNewUserHandler} />
			<UserList users={userList} />
		</Fragment>
	);
}

export default App;
