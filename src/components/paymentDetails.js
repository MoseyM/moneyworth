import React from 'react';
import { calcTotalPayments, calcTotalInterestPaid } from './calculator';

class PaymentDetails extends React.Component
{
	render() {
		let paymentDetails = this.props.details;
		let totalPayments = calcTotalPayments(paymentDetails);
		let totalInterestPaid = calcTotalInterestPaid(paymentDetails, totalPayments);
		return (
			<div>
				<div className="paymentBody">
					<h3>Payment:${ paymentDetails.payment }</h3>
					<h3>Interest:{ paymentDetails.interest }%</h3>
					<h3>Principal:${ (paymentDetails.principal ) }</h3>
					<h3>Total Interest Paid:${ (totalInterestPaid).toFixed(2) }</h3>
					<h3>Total Payments:{(totalPayments).toFixed(2)} Months</h3>
				</div>
			</div>
			)
	}
}

export default PaymentDetails;
