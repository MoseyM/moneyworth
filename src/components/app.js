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
		this.resetAll = this.resetAll.bind(this)

	}

	resetAll() {
		this.setState({
			result:{}
		})
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
			resultView = <div>
					<button className="btn btn-primary " onClick={this.resetAll}><i className="fa fa-repeat" aria-hidden="true"></i></button>
					<PayoffBlock paymentDetails = {this.state.result} /></div>;

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
