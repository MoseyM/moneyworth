import React from 'react';
import PaymentDetails from './paymentDetails';

class PaymentOptions extends React.Component
{
	constructor() {
		super();
		this.getOptions = this.getOptions.bind(this);
	}

	getOptions() {

		return "blah";
	}

	render() {
		let bal = this.getOptions();
		return (
			<div className="details">
				<h3>Payment:${ bal }</h3>
				</div>
		)
	}
}

export default PaymentOptions;