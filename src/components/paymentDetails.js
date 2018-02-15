import React from 'react';
import { calcTotalPayments, calcTotalInterestPaid } from './calculator';
import SelectOptions from './selectpaymentoptions';

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

	getPaymentValueText(values) {
		var text = Number(values.payment).toFixed(2);
		if (values['payment-difference']) {
			text += " ^$"+Number(values['payment-difference']).toFixed(2);
		}
		return text;
	}


	render() {
		let paymentDetails = this.props.details;
		let totalPayments = paymentDetails['months'] ? paymentDetails['months'] : calcTotalPayments(paymentDetails);
		let totalInterestPaid = calcTotalInterestPaid(paymentDetails, totalPayments);
		let options = <SelectOptions months = {totalPayments} details = {paymentDetails} currentInterest = {totalInterestPaid} />;
		return (
			<div>
				<div className="paymentBody">
					<ul className="user-loan-info">
						<li>Principal:${ (paymentDetails.principal ) }</li>
						<li>Payment:${ this.getPaymentValueText(paymentDetails) }</li>
						<li>Interest:{ paymentDetails.interest }%</li>
						<li>With the information you provided, It will take <span>{this.getPaymentText(totalPayments)}</span> and cost you <span>${(totalInterestPaid).toFixed(2) }</span> in interest to pay this loan off.</li>
					</ul>
					{options}
				</div>
			</div>
			)
	}
}

export default PaymentDetails;
