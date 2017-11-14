import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentOptions from './options';

const Payoff = (props) => {
	let paymentDetails = props.paymentDetails;
	if (paymentDetails.length) {
		var res = <PaymentDetails details={ paymentDetails }/>;
		var opts = <PaymentOptions details={ paymentDetails } />
	}
	return(
		<div>
			<div className="paymentBlock">
				<div className="paymentTitle"><p>Payment Details</p></div>
				{res}
				{opts}
			</div>
		</div>	
	);
}

export default Payoff;
