import React from 'react';
import {Link} from 'react-router-dom';
export default function Buttons(props) {
    return (
        <div className="col edit-buttons">
            <div className="row">
                <div className="col align-self-start">
                    <Link to={`/loan/edit/${props.index}`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div className="col align-self-center">
                <button onClick={
                    () => {props.deleteAction(props.index)} }>Delete</button>
                </div>
                <div className="col align-self-end">
                    <Link to={`/loan/view/${props.index}`}>
                        <button>View</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}