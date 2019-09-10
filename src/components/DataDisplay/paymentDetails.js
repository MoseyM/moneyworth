import React from 'react';
import { calcFutureValueOfMoney, calcTotalInterestPaid, calcLastPayment, calcNumOfPayments } from '../calculator';

export default function PaymentDetails(props)
{
	let paymentDetails = props.details;
	let grandTotal = calcFutureValueOfMoney(paymentDetails['interest'], paymentDetails['principal'], paymentDetails['payment'])
	let totalNumOfPayments = calcNumOfPayments(paymentDetails['interest'], paymentDetails['payment'], paymentDetails['principal']);
	let totalInterest = calcTotalInterestPaid(paymentDetails['payment'], paymentDetails['principal'], paymentDetails['interest'], totalNumOfPayments);
	return (
		<div className="paymentdetailsbox">
			<div><h1>{totalNumOfPayments.toFixed(0)}</h1><span className="small">months to payoff</span></div>
			<div className="infoBox">
				<ul className="list-inline">
					<li className="list-inline-item">Interest Paid: ${ totalInterest }</li>
				</ul>
				<span className="small-circle"><i className="far fa-money-bill-alt"></i> ${ Number(paymentDetails.principal ).toFixed(2) }</span>
				<span className="small-circle"><i className="fas fa-percentage"></i> { paymentDetails.interest }</span>
				<span className="small-circle"><i className="fas fa-money-check"></i> ${ Number(paymentDetails.payment ).toFixed(2) }</span>
				{/* Principal: ${ Number(paymentDetails.principal ).toFixed(2) }
				Interest Rate: { paymentDetails.interest } %
				Payment: ${ Number(paymentDetails.payment ).toFixed(2) } */}
				{/* Last Payment Date: {calculateDate(totalPayments)} */}
			</div>
		</div>
		)
}