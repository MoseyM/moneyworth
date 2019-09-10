import React from 'react';
import Input from './input';
import { Redirect } from 'react-router-dom';

class Form extends React.Component
{
	constructor(props) {
        super(props);
		this.state = {
            values: this.props.currentValues || {},
			fields: {
				'principal': {
					label: "Principal",
                    id: "principal",
                    icon: 'far fa-money-bill-alt',
                    invalid: true
				},
				'interest': {
                    label: "Interest Rate",
                    id: "interest",
                    icon: 'fas fa-percentage',
                    invalid: true
				},
				'payment': {
					label: "Payment per Period",
                    id: "payment",
                    icon: 'fas fa-money-check',
                    invalid: true
				}
            },
		};
		this.updateFieldValue = this.updateFieldValue.bind(this);
        this.onKeySubmit = this.onKeySubmit.bind(this);
	}

    updateFieldValue(name, val) {
        let oldVals = this.state.values;
        oldVals[name] = val;
        let newVals = oldVals;
        this.setState({
            values: newVals
        });
    }

	onKeySubmit(e) {
        e.preventDefault();
        let replacesAtIndex = this.props.match.params.id || null
        this.props.submitData(this.state.values, replacesAtIndex);
        this.props.history.push('/loan/showAll')
    }

	render() {
        let formInputs = [];
        for(let data in this.state.fields) {
            formInputs.push(<Input 
                        value = {
                            this.props.currentValues 
                            ? this.props.currentValues[data.toString()] 
                            : ''}
                        key = {data.toString()} 
                        updateFieldValue = {this.updateFieldValue} 
                        field={this.state.fields[data]}/>);
        }
        return (
            <div className="formwrapper">
                <h2>Loan Information</h2>
                <form 
                    id="finForm" 
                    onSubmit={this.onKeySubmit}>
                    {formInputs}
                    <input 
                        hidden
                        type="submit" 
                        className="btn btn-success" 
                        value="Submit" />
				</form>

			</div>
		);
	}
}

export default Form;
