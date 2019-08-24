import React from 'react';
import { calcFutureValueOfMoney, calcTotalInterestPaid, calcLastPayment, calcNumOfPayments } from '../calculator';

class PaymentDetails extends React.Component
{
	constructor(props) {
		super(props);
		this.getPaymentComment = this.getPaymentComment.bind(this);
	}

	getPaymentComment(details) {
		let text = "According to the information you provided, it will take " + Math.floor(details.months) + " months and cost a total of $" + Number(details.totalInterest).toFixed(2) + " in interest. Your last payment will be $" + Number(calcLastPayment(details.principal, details.interest, details.payment, details.months)).toFixed(2) + " Try increasing your payment below to see how this can change."  ;
		return text;
	}

	render() {
		let paymentDetails = this.props.details;
		let grandTotal = calcFutureValueOfMoney(paymentDetails['interest'], paymentDetails['principal'], paymentDetails['payment'])
		let totalNumOfPayments = calcNumOfPayments(paymentDetails['interest'], paymentDetails['payment'], paymentDetails['principal']);
		let totalInterest = calcTotalInterestPaid(paymentDetails['payment'], paymentDetails['principal'], paymentDetails['interest'], totalNumOfPayments);
		return (
			<div className="col">
				Principal: ${ Number(paymentDetails.principal ).toFixed(2) }
				Interest Rate: { paymentDetails.interest } %
				Payment: ${ Number(paymentDetails.payment ).toFixed(2) }
				{/* Last Payment Date: {calculateDate(totalPayments)} */}
				Total Paid: ${ grandTotal }
				Total Interest: ${ totalInterest }
			</div>
			)
	}
}

export default PaymentDetails;
