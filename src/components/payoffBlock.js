import React from 'react';
import PaymentDetails from './paymentDetails';
import SelectOptions from './selectOptions';
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
		this.buildNewDetails = this.buildNewDetails.bind(this);

	}

	setSelectOption(value) {
		this.setState({
			selectOption: value
		})
	}

	buildNewDetails(value) {
		let newDetails = {};
		newDetails['principal'] = this.state.paymentDetails['principal'];
		newDetails['interest'] = this.state.paymentDetails['interest'];
		newDetails['payment'] = this.state.paymentDetails['payment'];
		newDetails['months'] = this.state.selectOption;
		
		let newPayment = calcPaymentAmount(newDetails['principal'], newDetails['months'], newDetails['interest']);
		newDetails['payment'] = newPayment;
		
		let x = this.state.paymentForChart.concat([newDetails])
		return x;	
	}

	render() {
		let newPaymentDetails = this.buildNewDetails();
		let table = <PaymentTable details = { newPaymentDetails }/>;
		let details = <PaymentDetails details = { this.state.paymentDetails }/>;
		let chart = <Chart details = { newPaymentDetails } />

		let ret = 
			<div>
				<div className="paymentBlock">
					{details}
					{chart}
					{table}
				</div>
			</div>;

		return(
			ret
		);
	}
}

export default Payoff;
