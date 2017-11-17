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
			iterator:0
		};
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
				<form id="finForm" onSubmit={this.props.onKeySubmit}>
					<input type="text" id={this.state.labels[this.state.iterator]} onChange={this.props.change}
						   placeholder={this.state.fields[this.state.labels[this.state.iterator]].label} />
					<p id="error"></p>
				</form>
			</div>
		);
	}

}

export default Form