import React from 'react';
import { calcTotalPayments, calcTotalInterestPaid, calcLastPayment } from '../calculator';

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

		paymentDetails['months'] = (paymentDetails['months'] === undefined) 
			? calcTotalPayments(paymentDetails['principal'], paymentDetails['interest'], paymentDetails['payment']) 
			: paymentDetails['months'];

			paymentDetails['totalInterest'] = calcTotalInterestPaid(paymentDetails['payment'], paymentDetails['principal'], paymentDetails['interest'], paymentDetails['months']);

		let comment = this.getPaymentComment(paymentDetails);
		return (
			<div>
				<div className="row">
					<span className="col-lg-4 col-sm-4 col-xs-12">
						Principal: ${ Number(paymentDetails.principal ).toFixed(2) }
					</span>
					<span className="col-lg-4 col-sm-4 col-xs-12">
						Interest Rate: { paymentDetails.interest } %
					</span>
					<span className="col-lg-4 col-sm-4 col-xs-12">
						Payment: ${ Number(paymentDetails.payment ).toFixed(2) }
					</span>	
				</div>
				<div className="alert alert-primary" role="alert">
					{ comment }			
				</div>
			</div>
			)
	}
}

export default PaymentDetails;
