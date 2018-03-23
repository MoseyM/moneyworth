import React from 'react';

export default function Arrow(props) {
    let h = <span onClick={props.increment} ><i className="fas fa-arrow-up"></i></span>;
    if (props.current !== null) {
        h = <div><span onClick={props.increment} ><i className="fas fa-arrow-up"></i></span>
        <span onClick={props.decrement} ><i className="fas fa-arrow-down"></i></span></div>;
    }
    return h;
  }