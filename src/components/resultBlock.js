import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentTable from './table';
import Chart from './chart';
import { calcTotalPayments, calcTotalInterestPaid, calcPaymentAmount } from './calculator';

class Payoff extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			paymentDetails: this.props.paymentDetails,
			paymentForChart: [this.props.paymentDetails],
			selectOption: 0
		};
		
		this.setSelectOption = this.setSelectOption.bind(this)
	}

	setSelectOption(value) {
		this.setState({
			selectOption: value
		})
	}

	render() {
		let table = <PaymentTable details = { this.state.paymentDetails }/>;
		let details = <PaymentDetails details = { this.state.paymentDetails }/>;
		let ret = 
			<div>
				<div className="paymentBlock">
					{details}
					{table}
				</div>
			</div>;

		return(
			ret
		);
	}
}

export default Payoff;
