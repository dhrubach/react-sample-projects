import React from "react";

import { TodoObject } from "./../models/todo.model";

const TodoItem: React.FC<{ item: TodoObject }> = (props) => {
	return <li>{props.item.text}</li>;
};

export { TodoItem };
