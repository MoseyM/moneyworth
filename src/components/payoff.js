import React from 'react';


class Payoff extends React.Component {

	render() {
		return(
			<div>
				<p>{JSON.stringify(this.props.result)}</p>
			</div>
		)
	}


}

export default Payoff;
