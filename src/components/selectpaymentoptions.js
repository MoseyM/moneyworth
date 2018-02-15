import React from 'react';
import PaymentDetails from './paymentDetails';
import { calcPaymentAmount } from './calculator';

class SelectPaymentOptions extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			details: this.props.details,
			currentInterestPaid: this.props.currentInterest,
			newDetails: false
		};
		this.showMore = this.showMore.bind(this);
	}
		
	showMore(e) {
		var newPaymentDetails = this.state.details;
		if (newPaymentDetails['original-payment'] === undefined) {
			newPaymentDetails['original-payment'] = this.state.details['payment']
		}
		let oldPayment = newPaymentDetails['original-payment'];
		newPaymentDetails['months'] = e.target.value;
		let newPayment = calcPaymentAmount(newPaymentDetails['principal'], e.target.value, newPaymentDetails['interest']);
		newPaymentDetails['payment-difference'] = newPayment - oldPayment;
		newPaymentDetails['payment'] = newPayment;

		this.setState({
			newDetails: newPaymentDetails
		});
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
		let months = this.props.months, newOption;
		if (this.state.newDetails) {
			newOption = <PaymentDetails details={this.state.newDetails}/>;
		}
		var monthlyOptions = this.createOptions(this.getPaymentBreaks(months));
		return (
			<div>
				<select onChange={this.showMore}>
					<option value='' disabled></option>
					{monthlyOptions}
				</select>
				{newOption}
			</div>
		)
	}
}

export default SelectPaymentOptions;
