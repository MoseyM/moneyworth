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
                        deleteAction={props.deleteAction} 
                        // editForm={props.editForm} 
                        />
        collection.push(<div className="paymentBlock row">
                    {payoffData}
                    {buttons}
                </div>);
    }
    return (
        <div>
            <AddButton/>
            {collection}
        </div>
    );
}