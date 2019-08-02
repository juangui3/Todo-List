import React from "react";

export class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				"CODE CODE CODE!",
				"Clean The House",
				"Go To The Gym",
				"Get good sleep"
			],
			newItem: ""
		};
	}

	render() {
		const addItem = e => {
			console.log(e.target.value);
			let newItem = e.target.value;
			this.setState({
				newItem: newItem
			});
			/*
			this.setState({
				list: this.state.list.concat(newItem)
				//console.log(this.state.list);
				//console.log(e.target.value);
			});
            */
		};

		return (
			<div>
				<h1> Todo List </h1>
				<div className="container">
					<div className="input-group mb-3">
						<input
							//onClick={e => addItem(e)}
							type="text"
							className="form-control"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								onClick={e => addItem(e)}
								className="btn btn-outline-secondary"
								type="button"
								id="button-addon2">
								Add to List
							</button>
						</div>
					</div>
					<ul className="list-group">
						{this.state.list.map((item, index) => {
							return (
								<li className="list-group-item" key={index}>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
