import React from 'react';
import {calcTotalPayments, calcTotalInterestPaid, calcDiff} from './calculator';
import Arrow from './arrow';

class Table extends React.Component
{
    constructor(props) {
		super(props);
		var details = props.details;
		details['total_months'] = calcTotalPayments(this.props.details[0]);
		this.state = {
			original: details,
			currentPmt: null,
			currentInterest: null,
			currentMonths: null
		};
		this.incrementPayment = this.incrementPayment.bind(this);
		this.decrementPayment = this.decrementPayment.bind(this);
	}

	incrementPayment() {
		let cur, int, months;
		cur = (this.state.currentPmt == null) ? 
			parseFloat(this.state.original.payment) + 5 :
			this.state.currentPmt + 5;
		months = calcTotalPayments(this.state.original.principal, this.state.original.interest, cur)
		int = calcTotalInterestPaid(cur, this.state.original.principal, months )
		this.setState({
			currentPmt: cur,
			currentInterest: int,
			currentMonths: months
		});
	}
	decrementPayment() {
		let cur;
		if (parseFloat(this.state.currentPmt)) {
			cur = parseFloat(this.state.currentPmt) - 5;
			this.setState({
				currentPmt: cur
			});
		}
		
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
					<td>
						${Number(this.state.original['payment']).toFixed(2)}
						<Arrow increment={this.incrementPayment} decrement={this.decrementPayment} current={this.state.currentPmt} />					</td>
					<td>
					</td>
					<td>${Number(this.state.currentPmt).toFixed(2)}</td>
				</tr>
				<tr>
					<th scope="row">Total Months</th>
					<td>{Math.floor(this.state.original.months)}</td>
					<td>{calcDiff(this.state.currentMonths,this.state.original.months)}</td>
					<td>{Math.floor(this.state.currentMonths)}</td>
				</tr>
				<tr>
					<th scope="row">Interest Paid</th>
					<td>${Number(this.state.original.totalInterest).toFixed(2)}</td>
					<td>{calcDiff(this.state.currentInterest,this.state.original.totalInterest)}</td>
					<td>${Number(this.state.currentInterest).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
		);
	}
}
export default Table;