import React from 'react';
import {calcTotalPayments, calcTotalInterestPaid, calcDiff} from './calculator';
import Arrow from './arrow';
import Schedule from './schedule'

class Table extends React.Component
{
    constructor(props) {
		super(props);
		var details = props.details;
		details['total_months'] = calcTotalPayments(
			this.props.details['principal'], 
			this.props.details['interest'], 
			this.props.details['payment']);
		this.state = {
			original: details,
			currentPmt: Number(details['payment']),
			currentInterest: null,
			currentMonths: null,
			showNewComment: false
		};
		this.incrementPayment = this.incrementPayment.bind(this);
		this.decrementPayment = this.decrementPayment.bind(this);
	}

	incrementPayment() {
		let cur, int, months;
		cur = this.state.currentPmt + 5;
		months = calcTotalPayments(this.state.original.principal, this.state.original.interest, cur)
		int = calcTotalInterestPaid(cur, this.state.original.principal, months )
		this.setState({
			currentPmt: cur,
			currentInterest: int,
			currentMonths: months,
			showNewComment: true
		});
	}
	decrementPayment() {
		let cur;
		cur = parseFloat(this.state.currentPmt) - 5;
		if (cur != parseFloat(this.state.original.payment)) {
			this.setState({
				showNewComment: true,
			});
		} else {
			this.setState({
				showNewComment: false,
			});
		}
		this.setState({
			currentPmt: cur,
		});
		
	}

	render() {
		let diff = this.state.currentPmt - this.state.original.payment;
		return (
			<div>
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-xs-12 col-md-6 offset-md-3">
						<h1>${Number(this.state.currentPmt).toFixed(2)}
							<Arrow increment={this.incrementPayment} decrement={this.decrementPayment} current={this.state.currentPmt} original={this.state.original.payment} />
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<Schedule show={this.state.showNewComment} paymentDiff={diff} 
						interest={Number(this.state.currentInterest).toFixed(2)} months={Math.ceil(this.state.currentMonths)}/>
					</div>
				</div>
			</div>
		);
	}
}
export default Table;