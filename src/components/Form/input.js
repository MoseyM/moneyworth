import React from 'react';
import {validateInput} from '../Validation/values';

class Input extends React.Component
{
    constructor(props) {
        super(props);
        this.checkInput = this.checkInput.bind(this);
        this.setFieldBorder = this.setFieldBorder.bind(this);
        this.removeAnyFieldBorders = this.removeAnyFieldBorders.bind(this);
        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.handleLastSubmit = this.handleLastSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            fields: props.field,
            value: props.value
        };

    }

    checkInput(e) {
        this.removeAnyFieldBorders(e.target);
        let value = e.target.value;
        // check if value passes
        // TODO: check this logic
        if(!validateInput(value)) {
            this.setFieldBorder(e.target, 'error');
        } else if(value !== '' && value !== " ") {
            this.setFieldBorder(e.target,'success');
        }
    }

    updateFieldValue(e) {
        let targetValue = parseFloat(e.target.value)
        if(validateInput(e.target.value) && (targetValue !== this.state.value)) {
            this.props.updateFieldValue(this.state.fields.id, targetValue)
            return true;
        } else { return false;}
    }

    handleLastSubmit(e) {
        if(e.key === 'Enter') {
           const result = this.updateFieldValue(e);
           if (result === false) {
                e.preventDefault();
           }
        }
    }

    setFieldBorder(field, type) {
        switch(type) {
            case 'error':
                field.classList.add('error-box');
                break;
            case 'success':
                field.classList.add('success-box');
                break;
            default:
                break;
        }
    }
    
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    removeAnyFieldBorders(field) {
        field.className = '';
    }

    render() {
        return (
        <div className="form-group" id={"block_" + this.state.fields.id}>
            <i className={this.state.fields.icon}></i>
            <input type="text" 
                value={this.state.value}
                onChange={this.checkInput}
                onBlur={this.updateFieldValue} 
                id={this.state.fields.id} 
                onChange={this.handleChange}
                onKeyPress={this.handleLastSubmit}
                placeholder={this.state.fields.label} />
        </div>
        )
    }
}

export default Input