import React from 'react';

class PaymentOptions extends React.Component
{
	constructor() {
		super();
		this.getOptions = this.getOptions.bind(this);
	}

	getOptions(details) {
		return details[2];
	}

	render() {
		let details = this.props.details;
		let bal = this.getOptions(details);
		return (
			<div>
				<div className="paymentTitle"><p>Options</p></div>
				<div className="paymentOptions">
					<h3>Other Options:${ bal }</h3>
				</div>
			</div>
		)
	}
}

export default PaymentOptions;