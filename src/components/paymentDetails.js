import React from 'react';
import { calcTotalPayments, calcTotalInterestPaid } from './calculator';
import SelectOptions from './selectOptions';

class PaymentDetails extends React.Component
{
	getPaymentText(total) {
		var text = '', addtl, whole,part;
		whole = Math.floor(total/12);
		part  = Math.ceil(total % 12);
		text  = Number(total).toFixed(2) + " Months";

		if (whole > 0) {
			addtl = " ( " + whole + " Years";
			if (part > 0) {
				addtl += " and " + part + " month(s) )";
			} else {
				addtl += " )";
			}
			text = text + addtl;
		}

		return text;
	}

	getPaymentValueText(payment, diff = 0) {
		var text = Number(payment).toFixed(2);
		if (diff) {
			text += " ^$"+Number(diff).toFixed(2);
		}
		return text;
	}

	render() {
		let paymentDetails = this.props.details;

		paymentDetails['months'] = (paymentDetails['months'] === undefined) 
			? calcTotalPayments(paymentDetails) 
			: paymentDetails['months'];

			paymentDetails['totalInterest'] = calcTotalInterestPaid(paymentDetails, paymentDetails['months']);

		return (
			<div>
				<div className="paymentBody">
					<ul className="user-loan-info">
						<li>Principal:${ (paymentDetails.principal ) }</li>
						<li>Payment:${ this.getPaymentValueText(paymentDetails.payment, paymentDetails['payment-difference']) }</li>
						<li>Interest:{ paymentDetails.interest }%</li>
						<li>With the information you provided,
							It will take <span>{this.getPaymentText(paymentDetails['months'])} </span> 
							and cost you <span>${(paymentDetails['totalInterest']).toFixed(2) } </span> 
							in interest to pay this loan off.
						</li>
					</ul>
				</div>
			</div>
			)
	}
}

export default PaymentDetails;
