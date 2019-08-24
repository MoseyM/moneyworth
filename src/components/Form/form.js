import React from 'react';
import Input from './input';

class Form extends React.Component
{
	constructor(props) {
        super(props);
		this.state = {
            index: (Object.keys(this.props.currentValues).length ? this.props.currentValues.index : null),
			fields: {
				'principal': {
					label: "Principal",
                    id: "principal",
                    icon: 'far fa-money-bill-alt',
                    value: (Object.keys(this.props.currentValues).length  ? this.props.currentValues.principal : ''),
                    invalid: true
				},
				'interest': {
                    label: "Interest Rate",
                    id: "interest",
                    icon: 'fas fa-percentage',
                    value: (Object.keys(this.props.currentValues).length ? this.props.currentValues.interest : ''),
                    invalid: true
				},
				'payment': {
					label: "Payment per Period",
                    id: "payment",
                    icon: 'fas fa-money-check',
                    value: (Object.keys(this.props.currentValues).length ? this.props.currentValues.payment : ''),
                    invalid: true
				}
            },
		};
		this.updateFieldValue = this.updateFieldValue.bind(this);
        this.onKeySubmit = this.onKeySubmit.bind(this);
	}

    updateFieldValue(name, val) {
        this.setState((componentState) => {
            let old = Object.assign({}, componentState.fields);
            old[name].value = val;
            return { old }
        });
    }

	onKeySubmit(e) {
        e.preventDefault();

        //create a results object
        const resultValues = {
            'principal': this.state.fields.principal.value,
            'interest': this.state.fields.interest.value,
            'payment': this.state.fields.payment.value,
            'index': this.state.index
        }

        this.props.onPaymentDetailsChange(resultValues);
        //reset the whole form
        document.getElementById("finForm").reset();
    }

    componentWillMount() {
        this.setState({
            labels: Object.keys(this.state.fields)
        });
    }

	render() {
        let j = [];
        for(let data in this.state.fields) {
            j.push(<Input 
                        value={this.props.currentValues ? this.props.currentValues[data.toString()] : ''}
                        key={data.toString()} 
                        updateFieldValue = {this.updateFieldValue} 
                        field={this.state.fields[data]}/>);
        }
        return (
			<div className="col-xs-10 offset-xs-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <form className="form-inline" id="finForm" onSubmit={this.onKeySubmit}>
                    {j}
                    <input type="submit" className="btn btn-success" value="Submit" />
				</form>
			</div>
		);
	}

}

export default Form
