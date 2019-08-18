import React from 'react';

export default function AddButton(props) {
    return (
        <div className="container">
            <button 
                className="btn btn-primary " 
                onClick={props.formRequested}>
                    <i className="fas fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    )
}