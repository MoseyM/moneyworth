import React, { Component } from 'react';
import '../App.css';
import Form from './Form/form';
import AddButton from './addButton';
import {Routes} from './routes';

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
			let x = {};
			for(let j in obj) {
				x[j] = parseFloat(obj[j]);
			}
			currentResults[index] = x;
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

		let dataDivs;
		resultView = <AddButton formRequested={this.formRequested} />

		return (
			Routes
			);
	}
}

export default App;
