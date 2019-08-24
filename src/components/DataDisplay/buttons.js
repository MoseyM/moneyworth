import React from 'react';
export default function Buttons(props) {
    return (
        <div className="col edit-buttons">
            <div className="row">
                <div className="col align-self-start">
                <button onClick={ () => {props.editForm(props.index)} }>Edit</button>
                </div>
                <div className="col align-self-center">
                <button onClick={() => {props.deleteResult(props.index)} }>Delete</button>
                </div>
                <div className="col align-self-end">
                <button>View</button>
                </div>
            </div>
        </div>
    )
}