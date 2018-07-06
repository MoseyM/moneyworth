import React from 'react';

export default function Schedule(props) {
    let h;
    let str = "With an increase of $"+ props.paymentDiff +" to your payment, you will lower the total interest you pay to $"+ props.interest +" and decrease your payoff period to "+ props.months +" months. Your last payment will be $" + Number(props.lastPayment).toFixed(2);
    if (props.show) {
        h = <div className='alert alert-success' role='alert'>
            {str}
        </div>;
    } else {
        h = '';
    }
    return h;
  }