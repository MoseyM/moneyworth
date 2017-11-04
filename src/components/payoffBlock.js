import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentOptions from './options';

class Payoff extends React.Component {
	render() {
		let paymentDetails = this.props.paymentDetails;
		if (paymentDetails.length) {
			var res = <PaymentDetails details={ paymentDetails }/>;
			var opts = <PaymentOptions details={paymentDetails} />
		}
		return(
			<div>
				<div className="paymentBlock">
					{res}
					{opts}
				</div>
			</div>	
		);
	}
}

export default Payoff;
