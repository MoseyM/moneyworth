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
		this.deleteResult = this.deleteResult.bind(this);
		this.resetAll = this.resetAll.bind(this);
		this.formRequested = this.formRequested.bind(this);
		this.editForm = this.editForm.bind(this);
	}

	deleteResult(index) {
		let currentResults = this.state.result;
		currentResults.splice(index, 1);
		this.setState({
			result: currentResults
		});
	}

	resetAll() {
		this.setState({
			result:{}
		})
	}

	editForm(i) {
		let data = this.state.result[i];
		data.index = i;
		this.setState({
			holder: data,
			has: true
		});
	}

	formRequested() {
		this.setState({
			has: true,
			holder:{}
		});
	}

    componentWillReceiveProps() {
		return true;
	}


	handleDetailChange(obj) {
		let currentResults = this.state.result;

		if(obj.index !== null) {
			const index = obj.index;
			delete obj.index;
			currentResults[index] = obj
		} else {
			currentResults.push(obj)
		}
		this.setState({
			result: currentResults,
			has: false
		})
	}
   
	render() {
		let resultView = null;
		const nav = <Navigation></Navigation>;

		let dataDivs;
		if (!this.state.has) {
			if(this.state.result.length) {
				dataDivs = <Wrapper deleteResult={this.deleteResult} data={this.state.result} editForm={this.editForm} />;
			}
			resultView = <AddButton formRequested={this.formRequested} />
		} else {
			resultView = <div className="container">
				<div className="row">
					<Form currentValues={Object.keys(this.state.holder) ? this.state.holder : null} onPaymentDetailsChange = {this.handleDetailChange}/>
				</div></div>;
		}
		return (
			<div className="App">
				{nav}
				<div className="container-fluid">
					{this.state.result.length > 0 && dataDivs}
					{resultView}
				</div>
			</div>
		);
	}
}

export default App;
