import React from "react";

export class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			currentInput: "",
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
		return (
			<div>
				<h1> Todo List </h1>
				<div className="container">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Add to List"
							aria-label="Add to List"
							aria-describedby="button-addon2"
							onChange={e =>
								this.setState({ currentInput: e.target.value })
							}
						/>
						<div className="input-group-append">
							<button
								onClick={e => {
									this.setState({
										list: this.state.list.concat(
											this.state.currentInput
										)
									});
								}}
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
									<span className="float-left">{item}</span>
									<button
										onClick={e => {
											this.setState({
												list: this.state.list.filter(
													todo => todo !== item
												)
											});
										}}
										className="btn btn-outline-secondary float-right"
										type="button"
										id="button-addon2">
										<i className="fa fa-trash " />
									</button>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="container">
					<div className="float-left">
						{"List length:" + this.state.list.length}
					</div>
				</div>
			</div>
		);
	}
}
