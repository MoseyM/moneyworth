import React, { Component } from 'react';
import '../App.css';
import Form from './form';
import PayoffBlock from './payoffBlock';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:{},
			holder:{},
			iterator:0
		};
		this.handleDetailChange = this.handleDetailChange.bind(this);
	}

    componentWillReceiveProps() {
		return true;
	}

	handleDetailChange(obj) {
		this.setState({
			result: obj
		})
	}
   
	render() {
		let resultView = null;
		if (this.state.result.principal) {
			resultView = <PayoffBlock paymentDetails = {this.state.result} />;
		} else {
			resultView = <div className="container">
					<Form onPaymentDetailsChange = {this.handleDetailChange}/>
					<div className="clear"></div></div>;
		}
		return (
			<div className="App">
				{resultView}
			</div>
		);
	}
}

export default App;
