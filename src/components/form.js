import React from 'react';


class Form extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				principal: {
					label: "Principal",
					type: "currency"
				},
				interest: {
					label: "Interest Rate"
				},
				payment: {
					label: "Payment per Period",
					isLast: true
				}
			},
			holder: {},
			iterator:0
		};
		this.change = this.change.bind(this);
		this.onKeySubmit = this.onKeySubmit.bind(this);
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
        if( isNaN(currentInput.value) ) {
            j.innerHTML = "This must be a number";
            return false;
        }
        this.state.holder[this.state.labels[this.state.iterator]] = currentInput.value;
        // let curValue =  this.state.holder[this.state.labels[this.state.iterator]];
        // this.setState({
        // 	curValue: currentInput.value
        // })
        let count = this.state.iterator + 1;
        if( this.state.fields[this.state.labels[this.state.iterator]].isLast ) {

            this.setState({
                iterator: 0,
            });
            this.props.onPaymentDetailsChange(this.state.holder);

        } else {
            this.setState({
                iterator: count
            });
        }
        document.getElementById("finForm").reset();
    }

    componentWillMount() {
        this.setState({
            labels: Object.keys(this.state.fields)
        });
    }

	render() {
		return (
			<div>
				<h3 id="title">{this.state.fields[this.state.labels[this.state.iterator]].label}</h3>
				<form id="finForm" onSubmit={this.onKeySubmit}>
					<input type="text" id={this.state.labels[this.state.iterator]} onChange={this.change}
						   placeholder={this.state.fields[this.state.labels[this.state.iterator]].label} />
					<p id="error"></p>
				</form>
			</div>
		);
	}

}

export default Form