import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentOptions from './options';

const Payoff = (props) => {
	let paymentDetails = props.paymentDetails;
	let res = <PaymentDetails details={ paymentDetails }/>;
	
	return(
		<div>
			<div className="paymentBlock">
				<div className="paymentTitle"><p>Payment Details</p></div>
				{res}
			</div>
		</div>	
	);
}

export default Payoff;
