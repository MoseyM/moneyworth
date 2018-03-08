import React from 'react';
import PaymentDetails from './paymentDetails';
import SelectOptions from './selectOptions';
import { calcTotalPayments, calcTotalInterestPaid, calcPaymentAmount } from './calculator';

class Payoff extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			paymentDetails: this.props.paymentDetails,
			selectOption: 0
		};
		
		this.setSelectOption = this.setSelectOption.bind(this);
		this.buildNewDetails = this.buildNewDetails.bind(this);

	}

	setSelectOption(value) {
		this.setState({
			selectOption: value
		});
	}

	buildNewDetails() {
		let newDetails = {};
		newDetails['principal'] = this.state.paymentDetails['principal'];
		newDetails['interest'] = this.state.paymentDetails['interest'];
		newDetails['payment'] = this.state.paymentDetails['payment'];
		newDetails['months'] = this.state.selectOption;
		newDetails['original-payment'] = newDetails['payment']
		
		let oldPayment = newDetails['original-payment'];
		let newPayment = calcPaymentAmount(newDetails['principal'], newDetails['months'], newDetails['interest']);
		newDetails['payment-difference'] = newPayment - oldPayment;
		newDetails['payment'] = newPayment;

		return newDetails;
	}

	render() {
		let newPaymentDetails = this.buildNewDetails();
		let select = <PaymentDetails details = { newPaymentDetails }/>;

		let details = <PaymentDetails details = { this.state.paymentDetails }/>;
		let options = <SelectOptions details = { this.state.paymentDetails } setSelectOption= {this.setSelectOption}/>;
		
		let ret = <div>
				<div className="paymentBlock">
					{details}
					{options}
					{select}
				</div>
			</div>;

		return(
			ret
		);
	}
}

export default Payoff;
