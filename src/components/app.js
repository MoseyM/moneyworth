import React, { Component } from 'react';
import '../App.css';
import Form from './Form/form';
import Wrapper from './DataDisplay/wrapper';
import Navigation from './navigation';
import AddButton from './addButton';

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

		let dataDivs = [];
		if (!this.state.has) {
			if(this.state.result.length) {
				for(let res in this.state.result){
					dataDivs.push(<Wrapper data={res} />)
				}
			}
			resultView = <AddButton formRequested={this.formRequested} />
		} else {
			resultView = <div className="container">
				<div className="row">
					<Form onPaymentDetailsChange = {this.handleDetailChange}/>
				</div></div>;
		}
		return (
			<div className="App">
				{nav}
				{this.state.result.length > 0 && dataDivs}
				{resultView}
			</div>
		);
	}
}

export default App;
