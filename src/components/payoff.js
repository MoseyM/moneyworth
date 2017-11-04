import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentOptions from './options';

class Payoff extends React.Component {
	render() {
		let paymentDetails = this.props.paymentDetails;
		if (paymentDetails.length) {
			var res = <PaymentDetails details={ paymentDetails }/>
		}
		return(
			<div>
				{res}
			</div>	
		);
	}
}

export default Payoff;
