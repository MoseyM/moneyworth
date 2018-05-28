import React from 'react';

export default function Schedule(props) {
    let h;
    let str = "With an increase of $"+ props.paymentDiff +" to your payment, you will lower the interest paid to $"+ props.interest +" and decrease your payoff period to "+ props.months +" months";
    if (props.show) {
        h = <div class='alert alert-success' role='alert'>
            {str}
        </div>;
    } else {
        h = '';
    }
    return h;
  }