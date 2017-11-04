import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import DisplayPayoff from './payoff';

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

			let newResult = [
				principal,
				interestRate,
				monthlyPayment,
				totalOriginalPayments
			];
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
			j.push(<DisplayPayoff paymentDetails={ p }/>);
		})
		return (
			<div className="App">
				<Header />
				<div className="container">
					<form>
						<label htmlFor="principal">Principal</label>
							<input type="text" id="principal" ref="principal" />
						<label htmlFor="intRate">Interest Rate</label>
							<input type="text" ref="intRate" />
						<label htmlFor="monthlyPayment">Monthly Payment</label>
							<input type="text" id="monthlyPayment" ref="monthlyPayment" />
						<button onClick={ this.calcTotalPayments }>Calc</button>
					</form>
					{j}
				</div>
			</div>
		);
	}
}

export default App;
