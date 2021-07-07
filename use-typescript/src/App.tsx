import { Todos } from "./components/Todos";
import { TodoObject } from "./models/todo.model";

function App() {
	const todos: TodoObject[] = [
		{
			id: "td1",
			text: "Learn React",
		},
		{
			id: "td2",
			text: "Learn TypeScript",
		},
	];

	return (
		<div>
			<Todos items={todos} />
		</div>
	);
}

export default App;
