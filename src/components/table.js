import React from 'react';
import {calcTotalPayments, calcTotalInterestPaid} from './calculator';

class Table extends React.Component
{
    constructor(props) {
		super(props);
		let details = this.props.details[0];

		details['total_months'] = calcTotalPayments(this.props.details[0]);
		this.state = {
			original: details,
			currentPmt: null,
			currentInterest: null,
			currentMonths: null
		};
		this.incrementPayment = this.incrementPayment.bind(this);
		this.decrementPayment = this.decrementPayment.bind(this);
		this.incrementMonths = this.incrementMonths.bind(this);
		this.decrementMonths = this.decrementMonths.bind(this);
	}

	incrementPayment() {
		console.log("hello");
		let cur;
		if(this.state.currentPmt == null) {
			cur = parseFloat(this.state.original.payment) + 5;
		} else {
			cur = this.state.currentPmt + 5;
		}
		this.setState({
			currentPmt: cur
		});
	}
	decrementPayment() {

	}
	incrementMonths() {

	}
	decrementMonths() {

	}

	render() {
		return (
			<table className="table col-lg-6">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">Original</th>
					<th scope="col"></th>
					<th scope="col">New</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Payment</th>
					<td>${Number(this.state.original['payment']).toFixed(2)}</td>
					<td className="arrow">
						{this.state.currentPmt == null ? 
							<button onClick={(e) => this.incrementPayment(e)}><i className="fas fa-arrow-up"></i></button> :
							<button onClick={() => this.decrementPayment()}><i className="fas fa-arrow-down"></i></button>}						
					</td>
					<td>${Number(this.state.currentPmt).toFixed(2)}</td>
				</tr>
				<tr>
					<th scope="row">Total Months</th>
					<td>{Math.ceil(this.state.original['total_months'])}</td>
					<td className="arrow">
						{this.state.currentPmt == null ? 
							<span onClick={console.log("Blah")}><i className="fas fa-arrow-up"></i></span> :
							<span onClick={() => this.decrementMonths()}><i className="fas fa-arrow-down"></i></span>}						
					</td>
					<td>{Math.ceil(this.state.currentMonths)}</td>
				</tr>
				<tr>
					<th scope="row">Interest Paid</th>
					<td>${Number(this.state.original['totalInterest']).toFixed(2)}</td>
					<td></td>
					<td>${Number(this.state.currentInterest).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
		);
	}
}
export default Table;