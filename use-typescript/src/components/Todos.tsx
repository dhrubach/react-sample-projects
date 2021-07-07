import React from "react";

import { TodoObject } from "./../models/todo.model";
import { TodoItem } from "./TodoItem";

const Todos: React.FC<{ items: TodoObject[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodoItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export { Todos };
