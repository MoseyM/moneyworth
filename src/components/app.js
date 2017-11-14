import React, { Component } from 'react';
import '../App.css';
import Form from './form';
import PayoffBlock from './payoffBlock';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:[]
		};
		// this.calcTotalPayments =
		//  this.calcTotalPayments.bind(this);
	}

	// B = ( A * (1+r)n) - [ (P/r) * ((1+r)n - 1 ) ] 
	// B = Balance Amount 
	// A = Loan Amount 
	// P = Payment Amount
	// r = Rate of Interest (compounded) 
	// n = Number of time periods 

	calculateLastPayment(obj) {
		var data = obj;
		var bal = (obj.principal)
	}

	// calcTotalPayments(event) {
	// 	event.preventDefault();
	// 	let principal = 
	// 		parseFloat(this.refs.principal.value);
	// 	let interestRate = 
	// 		parseFloat(this.refs.intRate.value/100);
	// 	let monthlyPayment = 
	// 		parseFloat(this.refs.monthlyPayment.value);
		
	// 	// formula: N = −log(1−iA/P) / log(1+i)
	// 	let monthlyInterestRate = interestRate/12;
	// 	let totalOriginalPayments = 
	// 		-Math.log(
	// 			1-(monthlyInterestRate*principal)/
	// 			monthlyPayment)/
	// 		Math.log(1+monthlyInterestRate);
	// 	//calculate a last payment
	// 	let x = Math.floor(totalOriginalPayments)
	// 	let intRateAdj = 
	// 	Math.pow(1+monthlyInterestRate,x);

	// 	let lastPayment = (principal*intRateAdj)-(monthlyPayment*( (intRateAdj - 1)/monthlyInterestRate ));


	// 	let newResult = [
	// 		principal,
	// 		interestRate,
	// 		monthlyPayment,
	// 		totalOriginalPayments
	// 	]

	// 	var detArr = this.state.result;
	// 	detArr.push(newResult)
	// 	this.setState({
	// 		result: detArr
	// 	});
	// }

	render() {
		var j = [];
		this.state.result.map((p) => {
			j.push(<PayoffBlock paymentDetails={ p }/>);
		})

		return (
			<div className="App">
				<div className="container">
					<Form />
					{j}
					<div className="clear"></div>
				</div>
			</div>
		);
	}
}

export default App;
