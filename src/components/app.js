import React, { Component } from 'react';
import '../App.css';
import Form from './Form/form';
import ResultBlock from './resultBlock';
import Navigation from './navigation';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:[],
			holder:{},
			has: false
		};
		this.handleDetailChange = this.handleDetailChange.bind(this);
		this.resetAll = this.resetAll.bind(this);
		this.formRequested = this.formRequested.bind(this);
	}

	resetAll() {
		this.setState({
			result:{}
		})
	}

	formRequested() {
		this.setState({
			has: true
		});
	}

    componentWillReceiveProps() {
		return true;
	}


	handleDetailChange(obj) {
		this.state.result.push(obj);
		this.setState({
			has: false
		})
	}
   
	render() {
		let resultView = null;
		const nav = <Navigation></Navigation>;

		if (!this.state.has) {
			if(this.state.result.length) {
				let boxes = [];
				for(let res in this.state.result){
					boxes.push(<Box data={res}>)
				}
			}
			resultView = <div className="container">
					<button className="btn btn-primary " onClick={this.formRequested}><i className="fas fa-plus" aria-hidden="true"></i></button></div>;
		} else {
			resultView = <div className="container">
				<div className="row">
					<Form onPaymentDetailsChange = {this.handleDetailChange}/>
				</div></div>;
		}
		return (
			<div className="App">
				{nav}
				{resultView}
			</div>
		);
	}
}

export default App;
