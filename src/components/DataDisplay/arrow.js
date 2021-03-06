import React from 'react';

export default function Arrow(props) {
    let h;
    if (props.current == props.original) {
        h = <span id="arrows-for-payment"><span onClick={props.increment}><i className="fas fa-arrow-up"></i></span>
       </span>;
    } else {
        h = <span id="arrows-for-payment"><span onClick={props.increment}><i className="fas fa-arrow-up"></i></span>
        <span onClick={props.decrement} ><i className="fas fa-arrow-down"></i></span></span>;
    }
    
    return h;
  }