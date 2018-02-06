import React from 'react';
import PaymentDetails from './paymentDetails';
import { calcTotalPayments, calcPaymentAmount } from './calculator';

class PaymentOptions extends React.Component
{
	constructor(props) {
		super(props);
		this.getOptions = this.getOptions.bind(this);
		this.show = false;
	}

	getOptions() {
		/** let newResult = [
			principal,
			interestRate,
			monthlyPayment,
			totalOriginalPayments
			]
			pmt = pv[r/1-(1+r)^-n] * 1/(1+r)
		**/
		console.log(this.props.details);
		let {
		principal,
		interest, 
		payment} = this.props.details;
		let totalOriginalPayments = this.props.details['payment'] = calcTotalPayments(this.props.details);
		let clone = {...this.props.details};

		if (totalOriginalPayments <= 24 || totalOriginalPayments >= 48) {
				clone['payment'] = calcPaymentAmount(principal,  totalOriginalPayments / 2, interest);
				this.show = true;
		} else if (totalOriginalPayments < 48 || totalOriginalPayments > 24) {
				clone['payment'] = calcPaymentAmount(principal, 18, interest);
				this.show = true;
		} else if (totalOriginalPayments <= 36) {
				clone['payment'] = calcPaymentAmount(principal, 12, interest);
				this.show = true;
		}
console.log(clone)
		return clone;
	}

	render() {
		let details = this.getOptions();
		let res;

		if (this.show) {
			res = <PaymentDetails details={ details }/>;
		} else {
			res = "It Looks like your plan may be the most efficient";
		}
		return (
			<div>
				<div className="paymentTitle"><p>Options</p></div>
				<div className="paymentOptions">
					{res}
				</div>
			</div>
		)
	}
}

export default PaymentOptions;