import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Payoff from './payoff';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:[]
		};
		this.showPayoff = this.showPayoff.bind(this);
	}
	showPayoff(event) {
			event.preventDefault();
			let principal = this.refs.principal.value;
			let interestRate = this.refs.intRate.value;
			let monthlyPayment = this.refs.monthlyPayment.value;
			
			let newResult = [
				principal,
				interestRate,
				monthlyPayment
			];

			this.setState({
				result: newResult
			});
		}
  render() {
    return (
      <div className="App">
      <Header />
      <div className="container">
	    <form id="test">
	    	<label htmlFor="principal">Principal</label>
	    		<input type="text" id="principal" ref="principal" />
	    	<label htmlFor="intRate">Interest Rate</label>
				<input type="text" ref="intRate" />
			<label htmlFor="monthlyPayment">Monthly Payment</label>
	    		<input type="text" id="monthlyPayment" ref="monthlyPayment" />
	    	<button onClick={ this.showPayoff }>Get It!</button>
	    </form>
        <Payoff result={ this.state.result }/>
	   </div>
	  </div>
    );
  }
}

export default App;
