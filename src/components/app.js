import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import PayoffBlock from './payoffBlock';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:[]
		};
		this.calcTotalPayments =
		 this.calcTotalPayments.bind(this);
		 this.clearForm = 
		 	this.clearForm.bind(this);
	}

	clearForm() {
		this.refs.principal.value = null;
		this.refs.intRate.value = null;
		this.refs.monthlyPayment.value = null;
	}

	calcTotalPayments(event) {
		event.preventDefault();
		let principal = 
			parseFloat(this.refs.principal.value);
		let interestRate = 
			parseFloat(this.refs.intRate.value/100);
		let monthlyPayment = 
			parseFloat(this.refs.monthlyPayment.value);
		
		// formula: N = −log(1−iA/P) / log(1+i)
		let monthlyInterestRate = interestRate/12;
		let totalOriginalPayments = 
			-Math.log(
				1-(monthlyInterestRate*principal)/
				monthlyPayment)/
			Math.log(1+monthlyInterestRate);
		//calculate a last payment
		let x = Math.floor(totalOriginalPayments)
		let intRateAdj = 
		Math.pow(1+monthlyInterestRate,x);

		let lastPayment = (principal*intRateAdj)-(monthlyPayment*( (intRateAdj - 1)/monthlyInterestRate ));


		let newResult = [
			principal,
			interestRate,
			monthlyPayment,
			totalOriginalPayments
		]

		var detArr = this.state.result;
		detArr.push(newResult)
		this.setState({
			result: detArr
		});

		this.clearForm();
	}

	render() {
		var j = [];
		this.state.result.map(function(p) {
			j.push(<PayoffBlock paymentDetails={ p }/>);
		})

		return (
			<div className="App">
				<Header />
				<div className="container">
					<form>
						<input type="text" id="principal" placeholder="Principal" ref="principal" />
						<input type="text" placeholder="Interest Rate x%" ref="intRate" />
						<input type="text" placeholder="Monthly Payment" id="monthlyPayment" ref="monthlyPayment" />
						<button id="submitButton" onClick={ this.calcTotalPayments }>Calc</button>
					</form>

					{j}
					<div className="clear"></div>
				</div>
			</div>
		);
	}
}

export default App;
