import React from 'react';

class Form extends React.Component

{

	constructor() {
		super();
		this.state = {
			fields: {
				principal: {
					value: null,
					label: "Principal",
					type: "currency"
				},
				interest: {
					value: null,
					label: "Interest Rate"
				},
				payment: {
					value: null,
					label: "Payment per Period"
				}
			},
			iterator:0
		};
		this.change = this.change.bind(this);
		this.onkeySubmit = this.onkeySubmit.bind(this);
	}

	componentWillMount() {
		this.setState({
			labels: Object.keys(this.state.fields)
		});
	}

	render() {
		var b = "fdfsdaf"
		return (
			<form onSubmit={this.onkeySubmit}>
				<h3 id="inputHead"></h3>
				<input type="text" id="{this.state.labels[this.state.iterator]}" onChange={this.change}
				 placeholder={this.state.fields[this.state.labels[this.state.iterator]].label} />
				<p id="error"></p>
			</form>

		);
	}

	change(e) {
		let j = document.getElementById("error");
		if(isNaN(e.target.value) ) {
			j.innerHTML = "This must be a number";
		} else {
			j.innerHTML = null;
		}
	}

	onkeySubmit(e) {
		let j = document.getElementById("error");
		e.preventDefault();
		console.log("Submit!")
		if(isNaN(e.target.value) ) {
			j.innerHTML = "This must be a number";
		} else {
			console.log(e.target.id)
		}
	}			
}

export default Form