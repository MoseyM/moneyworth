import React, {Component} from 'react';
import Form from './Form/form';
import Loans from './loans';
// import View from './view';

class LoanWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
			result:[],
			holder:{},
			has: false
		};
        this.decideHTTPAction = this.decideHTTPAction.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    submitData(data) {
        let current = this.state.result;
        current.push(data);
        this.setState({
            result: current
        })
    }

    render() {
        return this.decideHTTPAction();
    }

    decideHTTPAction() {
        switch(this.props.match.params.http) {
            case "create":
                return <Form {...this.props} submitData={this.submitData} />
            case "showAll":
                return <Loans result={this.state.result} />;
            case "edit":
                return <Form 
                            submitData={this.submitData} 
                            index={this.props.match.param.id} />
            case "view":
                // return <View index={this.props.match.param.id} />
            default:
                return "No Route Found!";
        }
    }
}

export default LoanWrapper;