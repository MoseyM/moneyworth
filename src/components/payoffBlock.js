import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentOptions from './paymentOptions';

const Payoff = (props) => {
	let paymentDetails = props.paymentDetails;
	let details = <PaymentDetails details={ paymentDetails }/>;
	let options = <PaymentOptions details={ paymentDetails }/>;
	return(
		<div>
			<div className="paymentBlock">
				<div className="paymentTitle"><p>Payment Details</p></div>
				{details}
				{options}
			</div>
		</div>	
	);
}

export default Payoff;
