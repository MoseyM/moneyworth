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
        console.log(e.target)

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
                <span className="error"></span>
            </div>;
            
            return block;
            });
        return (
			<div className="row">
                <form id="finForm" onSubmit={this.onKeySubmit}>
                    {j}
                    <input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}

export default Form