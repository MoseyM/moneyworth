import React, { Component } from 'react';
import '../App.css';
import Form from './form';
import PayoffBlock from './payoffBlock';

class App extends Component {

	constructor() {
		super();
		this.state = {
			result:[],
			holder:{},
			iterator:0
		};
		this.change = this.change.bind(this);
        this.onKeySubmit = this.onKeySubmit.bind(this);
	}

    onKeySubmit(e) {
        e.preventDefault();
        let j = document.getElementById("error");
        let currentInput = document.getElementById(this.state.labels[this.state.iterator]);
        if(isNaN(currentInput.value) ) {
            j.innerHTML = "This must be a number";
            return false;
        }
        this.state.holder[this.state.labels[this.state.iterator]] = currentInput.value;
        let count = this.state.iterator + 1;
        if(this.state.fields[this.state.labels[this.state.iterator]].isLast) {
            let cur = this.state.result;
            cur.push(this.state.holder);

            this.setState({
                iterator: 0,
				result: cur
            });
        } else {
            this.setState({
                iterator: count
            })
        }
        document.getElementById("finForm").reset();
    }

    componentWillReceiveProps() {
		console.log("recveive props here");
		return true;
	}
    shouldComponentUpdate() {
		// console.log(nextProps,nextState);
		return false;
	}
    change(e) {
        let j = document.getElementById("error");
        if(isNaN(e.target.value) ) {
            j.innerHTML = "This must be a number";
        } else {
            j.innerHTML = null;
        }
    }

	render() {
		var j = [];
		this.state.result.map((p) => {
			j.push(<PayoffBlock paymentDetails={ p }/>);
		})

		return (
			<div className="App">
				<div className="container">
					<Form change={this.change} />
					{j}
					<div className="clear"></div>
				</div>
			</div>
		);
	}
}

export default App;
