import React from 'react';


class Form extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				principal: {
					label: "Principal",
                    type: "currency",
                    id: "principal"
				},
				interest: {
                    label: "Interest Rate",
                    id: "interest"
				},
				payment: {
					label: "Payment per Period",
                    isLast: true,
                    id: "payment"
				}
			},
			holder: {}
		};
		this.change = this.change.bind(this);
		this.onKeySubmit = this.onKeySubmit.bind(this);
	}

	change(e) {
        let error = e.target.parentNode.childNodes[2];
        let validatoIcon = e.target.parentNode.childNodes[1];
        if(isNaN(e.target.value) ) {
            validatoIcon.innerHTML = "<i class='far fa-times-circle'></i>";
            error.innerHTML = "This must be a number";
        } else if(e.target.value.length) {
            error.innerHTML = null;
            validatoIcon.innerHTML = "<i class='far fa-check-circle'></i>";
        } else {
            error.innerHTML = null;
            validatoIcon.innerHTML = null;
        }
    }

	onKeySubmit(e) {
        e.preventDefault();

        let j = document.getElementsByClassName("error")[0];
        let currentInput = document.getElementById(this.state.labels[this.state.iterator]);
        if( isNaN(currentInput.value) ) {
            j.innerHTML = "This must be a number";
            return false;
        }
        this.state.holder[this.state.labels[this.state.iterator]] = currentInput.value;

        let count = this.state.iterator + 1;
        if( this.state.fields[this.state.labels[this.state.iterator]].isLast ) {
            this.setState({
                iterator: 0,
            });
            this.props.onPaymentDetailsChange(this.state.holder);

        } else {
            this.setState({
                iterator: count
            });
        }
        document.getElementById("finForm").reset();
    }

    componentWillMount() {
        this.setState({
            labels: Object.keys(this.state.fields)
        });
    }

	render() {
        const fields = this.state.fields;
		let j = this.state.labels.map((key) => {
            const block = <div className="form-group" id={"block_" + this.state.fields[key].id}>
                <input type="text" id={this.state.fields[key].id} placeholder={this.state.fields[key].label} onChange={this.change} />
                <span className="validator-icon"></span>
                <span className="error"></span>
            </div>;
            
            return block;
            });
        return (
			<div className="row">
                <form id="finForm" onSubmit={this.onKeySubmit}>
                    {j}
				</form>
			</div>
		);
	}

}

export default Form