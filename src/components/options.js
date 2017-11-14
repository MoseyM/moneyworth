import React from 'react';
import PaymentDetails from './paymentDetails';

class PaymentOptions extends React.Component
{
	constructor() {
		super();
		this.getOptions = this.getOptions.bind(this);
		this.show = false;
	}

	getOptions(details) {
		/** let newResult = [
			principal,
			interestRate,
			monthlyPayment,
			totalOriginalPayments
			]
			pmt = pv[r/1-(1+r)^-n] * 1/(1+r)
		**/
		let [
		principal,
		interestRate, 
		monthlyPayment, 
		totalOriginalPayments] = details;
		let newPayment, monthlyint = interestRate/12;

		if(12 <= totalOriginalPayments <= 6) {
			details[3] = 6;
			newPayment = monthlyint*principal/(1-Math.pow(1+monthlyint, -6));
		} else if (24 <= totalOriginalPayments <= 13) {
			details[3] = 18;
			newPayment = monthlyint*principal/(1-Math.pow(1+monthlyint, -18));
		} else if (36 <= totalOriginalPayments <= 25) {
			details[3] = 29;
			newPayment = monthlyint*principal/(1-Math.pow(1+monthlyint, -29));
		}
		if(newPayment) {
			this.show = true;
			details[2] = Number(newPayment).toFixed(2)};
		return details;
	}

	render() {
		let details = this.getOptions(this.props.details),res;
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