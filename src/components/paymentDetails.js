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
				<div className="paymentBody row">
					<span className="col-lg-4 col-sm-4 col-xs-4">
						<i className="fa fa-dollar"></i> { Number(paymentDetails.principal ).toFixed(2) }
					</span>
					<span className="col-lg-4 col-sm-4 col-xs-4">
						<i className="fa fa-percent"></i> { Number(paymentDetails.interest ).toFixed(2) }
					</span>
					<span className="col-lg-4 col-sm-4 col-xs-4">
					<i className="fa fa-money" aria-hidden="true"></i> { Number(paymentDetails.payment ).toFixed(2) }
					</span>				
				</div>
			)
	}
}

export default PaymentDetails;
