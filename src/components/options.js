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
			<div className="details">
				<h3>Payment:${ bal }</h3>
			</div>
		)
	}
}

export default PaymentOptions;