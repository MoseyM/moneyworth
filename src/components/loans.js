import React from 'react';
import PaymentDetails from './DataDisplay/paymentDetails';
import Buttons from './DataDisplay/buttons';
import AddButton from './addButton';

export default function Loans(props) {
    let collection = [];
    for(let index in props.result) {
        let payoffData = <PaymentDetails details={ props.result[index] }/>;
        let buttons = <Buttons  
        index={index} 
        deleteAction={props.deleteAction}/>
        let childRow = React.createElement('div', {className: 'payoffCell col-12 col-md-4'},[payoffData,buttons]);
        collection.push(childRow);
    }
    let parentRow = React.createElement('div', {className: 'row'},collection);
    return (
        <div>
            <AddButton/>
            {parentRow}
        </div>
    );
}