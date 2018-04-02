import React, { Component } from 'react';
import '../App.css';
import Form from './form';
import ResultBlock from './resultBlock';

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
			resultView = <div className="container">
					<button className="btn btn-primary " onClick={this.resetAll}><i className="fas fa-redo" aria-hidden="true"></i></button>
					<ResultBlock paymentDetails = {this.state.result} /></div>;
		} else {
			resultView = <div className="container">
				<div className="row">
					<Form onPaymentDetailsChange = {this.handleDetailChange}/>
				</div></div>;
		}
		return (
			<div className="App">
				{resultView}
			</div>
		);
	}
}

export default App;
