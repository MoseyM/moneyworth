import React from 'react';
import PaymentDetails from './paymentDetails';
import Buttons from './buttons';

class Wrapper extends React.Component
{
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
			paymentForChart: [this.props.paymentDetails],
			selectOption: 0
		};
		this.setSelectOption = this.setSelectOption.bind(this)
	}

	setSelectOption(value) {
		this.setState({
			selectOption: value
		})
	}

	render() {
		// let table = <PaymentTable details = { this.state.paymentDetails }/>;
		let ret = [];
			for(let index in this.state.data) {
				let payoffData = <PaymentDetails details = { this.state.data[index] }/>;
				let buttons = <Buttons index={index} deleteResult={this.props.deleteResult} editForm={this.props.editForm} />
				ret.push(<div className="paymentBlock row">
							{payoffData}
							{buttons}
						</div>);

			}
		return(ret);
	}
}

export default Wrapper;
