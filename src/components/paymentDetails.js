import React from 'react';

class PaymentDetails extends React.Component
{

	/** let newResult = [
			principal,
			interestRate,
			monthlyPayment,
			totalOriginalPayments
		]
	**/


	render() {
		let paymentDetails = this.props.details;
		return (
			<div>
				<div className="paymentTitle"><p>Payment Details</p></div>
				<div className="paymentBody">
					<h3>Payment:${ paymentDetails[2] }</h3>
					<h3>Interest:{ Number(paymentDetails[1]*100).toFixed(2) }%</h3>
					<h3>Principal:${ (paymentDetails[0] ) }</h3>
					<h3>Total Interest Paid:${ Number( (paymentDetails[2] * paymentDetails[3]) - paymentDetails[0]).toFixed(2) }</h3>
					<h3>Total Payments:{ Math.ceil(paymentDetails[3] ) } Months</h3>
				</div>
			</div>
			)
	}
}

export default PaymentDetails;
