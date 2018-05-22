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
        let error = e.target.parentNode.childNodes[1];
        if(isNaN(e.target.value) ) {
            error.innerHTML = "This must be a number";
        } else {
            switch (e.target.id) {
                case "interest":
                    if ((e.target.value != null) && (e.target.value > 100 || e.target.value < 0)) {
                        error.innerHTML = "Interest must be greater than 0 and less than 100!"
                    } else {
                        error.innerHTML = null;
                    }
                    break;
                case "payment":
                    let principal = parseFloat(document.getElementById('principal').value);
                    if (principal > 0 && e.target.value > principal) {
                        error.innerHTML = "Your payment is greater than your principal!";
                    } else {
                        error.innerHTML = null;
                    }
                    break;
                default:
                    error.innerHTML = null;
                    break;
            }
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
        let list = document.getElementsByClassName('validate-error');
        console.log(list )

        for (var i = 0; i < list.length; i++) {
            if (list[i].innerHTML != "") {
                return;
            }
         }

        this.props.onPaymentDetailsChange(input);

        //reset the whole form
        document.getElementById("finForm").reset();

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
                <p className="validate-error"></p>
            </div>;
            
            return block;
            });
        return (
			<div className="col-xs-10 offset-xs-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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