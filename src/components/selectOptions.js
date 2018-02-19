import React from 'react';
import PaymentDetails from './paymentDetails';
import { calcTotalPayments } from './calculator';

class SelectPaymentOptions extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			details: this.props.details,
			months: calcTotalPayments(this.props.details),
			newDetails: false
		};
		this.setSelectState = this.setSelectState.bind(this);
	}

	setSelectState(e) {
		this.props.setSelectOption(e.target.value);
	}
		
	getPaymentBreaks(total) 
	{
		let val = {};

		if (total < 12 && total > 4) {
			val['sixth'] =  Math.floor(total/2);
		} 
		if (total > 12) {
			val['twice'] = Math.floor(total/6);
		}
		return val;
	}

	createOptions(sets)
	{
		if (Object.keys(sets).length === 0) {return;}
		
		var results = [];
		switch (Object.keys(sets)[0]) {
			case "twice": {
				for (let i = 1; i <= sets['twice']; i++) {
					var number = 6*i;
					results.push(
						{
							text: number,
							value: number
						}
					);
				}
				break;
			}
			case "sixth": {
				for (let i = 1; i <= sets['sixth']; i++) {
					var number = 2*i;
					results.push(
						{
							text: number,
							value: number
						}
					);
				}

				break;
			}
			default: {
				break;
			}
		}
		let l = [];
		results.forEach(result =>
			l.push(<option key={result.value} value={result.value}> {result.text}</option> )
			);
		return l;

	}

	render() {
		let months = this.state.months, returnedOptions, monthlyOptions;
		if (this.state.newDetails) {
			returnedOptions = <PaymentDetails details={this.state.newDetails}/>;
		} else {
			monthlyOptions = this.createOptions(this.getPaymentBreaks(months));
			returnedOptions = <div>
			<select onChange={this.setSelectState}>
				<option value='' disabled></option>
				{monthlyOptions}
			</select>
		</div>;

		}
		return (
			<div>
				{returnedOptions}
			</div>
		)
	}
}

export default SelectPaymentOptions;
