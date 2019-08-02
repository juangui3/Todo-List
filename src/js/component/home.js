import React from "react";
import { TodoList } from "./todolist";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<TodoList />
			</div>
		);
	}
}
