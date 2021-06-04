import React, { useState } from "react";

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
		<div>
			<AddUser onAddUser={registerNewUserHandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;
