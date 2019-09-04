import React, {Component} from 'react';
import Form from './Form/form';
import Loans from './loans';
import View from './DataDisplay/view';

class LoanWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
			result:[],
			holder:{},
			has: false
		};
        this.decideHTTPAction = this.decideHTTPAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    submitData(data, replacesAtIndex = null) {
        let current = this.state.result;
        if(replacesAtIndex) {
            current[replacesAtIndex] = data;
        } else {
            current.push(data);
        }
        this.setState({
            result: current
        })
    }

    deleteAction(index) {
        let currentValues = this.state.result;
        currentValues.splice(index,1);
        this.setState({
            result: currentValues
        });
    }

    render() {
        return this.decideHTTPAction();
    }

    decideHTTPAction() {
        switch(this.props.match.params.http) {
            case "create":
                return <Form {...this.props} submitData={this.submitData} />
            case "showAll":
                return <Loans result={this.state.result} deleteAction={this.deleteAction} />;
            case "edit":
                let details = this.state.result[this.props.match.params.id];
                return <Form 
                            {...this.props}
                            submitData={this.submitData} 
                            currentValues={details} />
            case "view":
                return <View index={this.props.match.params.id} />
            default:
                return "The Route: " + this.props.location.pathname + " Was Not Found!";
        }
    }
}

export default LoanWrapper;