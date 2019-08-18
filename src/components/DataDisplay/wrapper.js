import React from 'react';
import PaymentDetails from './paymentDetails';
import PaymentTable from './table';

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
		// let details = <PaymentDetails details = { this.state.paymentDetails }/>;
		let ret = 
			<div>
				<div className="paymentBlock">
					here
				</div>
			</div>;

		return(
			ret
		);
	}
}

export default Wrapper;
