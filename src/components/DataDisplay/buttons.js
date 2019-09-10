import React from 'react';
import {Link} from 'react-router-dom';
export default function Buttons(props) {
    return (
        <div className="col edit-buttons">
            <div className="row">
                <div className="col">
                    <Link to={`/loan/edit/${props.index}`}>
                        Edit
                    </Link>
                </div>
                <div className="col">
                    <span className="clickableSpan" onClick={
                        () => {props.deleteAction(props.index)} }>Delete</span>
                </div>
                <div className="col">
                    <Link to={`/loan/view/${props.index}`}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}