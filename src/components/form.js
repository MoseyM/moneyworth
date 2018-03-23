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
        let validatorIcon = e.target.parentNode.childNodes[1];
        if(isNaN(e.target.value) ) {
            validatorIcon.innerHTML = "<i className='far fa-times-circle'></i>";
            error.style.display = "block";
        } else if(e.target.value.length) {
            error.style.display = 'none';
            validatorIcon.innerHTML = "<i className='far fa-check-circle'></i>";
        } else {
            error.innerHTML = null;
            validatorIcon.innerHTML = null;
        }
    }

	onKeySubmit(e) {
        e.preventDefault();
        let input = {};
        for (var k = 0; k < e.target.length; k++) {
            if (e.target[k].id) {
                input[e.target[k].id] = e.target[k].value;
            }
        }
        this.props.onPaymentDetailsChange(input);

        //reset the whole form
        document.getElementById("finForm").reset();

        let list = document.getElementsByClassName('error');
        for (var i = 0; i < list.length; i++) {
           list[i].innerHTML = null;
        }
        let kp = document.getElementsByClassName('validator-icon');
        for (var l = 0; l < kp.length; l++) {
            kp[l].innerHTML = null;
        }
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
                <span className="validate-error">This must be a number</span>
            </div>;
            
            return block;
            });
        return (
			<div className="col-xs-10 offset-xs-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                <h1>What Do You Owe?</h1>
                <form  id="finForm" onSubmit={this.onKeySubmit}>
                    {j}
                    <input type="submit" className="btn btn-success" value="Submit" />
				</form>
			</div>
		);
	}

}

export default Form