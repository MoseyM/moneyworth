import React from 'react';
import PayoffBlock from './payoffBlock';


class Form extends React.Component

{

	constructor() {
		super();
		this.state = {
			fields: {
				principal: {
					value: '',
					label: "Principal",
					type: "currency"
				},
				interest: {
					value: '',
					label: "Interest Rate"
				},
				payment: {
					value: '',
					label: "Payment per Period",
					isLast: true
				}
			},
			iterator:0
		};
		this.change = this.change.bind(this);
		this.onKeySubmit = this.onKeySubmit.bind(this);
	}

	componentWillMount() {
		this.setState({
			labels: Object.keys(this.state.fields)
		});
	}

	render() {
		let result;
		if(this.state.fields[this.state.labels[this.state.iterator]].isLast) {
            result = <PayoffBlock paymentDetails={ this.state.fields }/>;
		}
		return (
			<div>
				<h3 id="title">{this.state.fields[this.state.labels[this.state.iterator]].label}</h3>
				<form id="finForm" onSubmit={this.onKeySubmit}>
					<input type="text" id={this.state.labels[this.state.iterator]} onChange={this.change}
						   placeholder={this.state.fields[this.state.labels[this.state.iterator]].label}
						   defaultValue={this.state.fields[this.state.labels[this.state.iterator]].value} />
					<p id="error"></p>
				</form>
			</div>
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

	onKeySubmit(e) {
        e.preventDefault();
        let j = document.getElementById("error");
		let currentInput = document.getElementById(this.state.labels[this.state.iterator]);
		if(isNaN(currentInput.value) ) {
            j.innerHTML = "This must be a number";
            return false;
        }
        this.state.fields[this.state.labels[this.state.iterator]].value = currentInput.value;
		let count = this.state.iterator + 1;
        if(this.state.fields[this.state.labels[this.state.iterator]].isLast) {
        	this.setState({
                iterator: 0
            })
        } else {
            this.setState({
                iterator: count
            })
		}
		document.getElementById("finForm").reset();
	}

}

export default Form