import React from 'react';
import { Link } from 'react-router-dom';

export default function AddButton() {
    return (
        <div className="container">
            <Link to="/loan/create">
                <button 
                    className="btn btn-primary ">
                        <i className="fas fa-plus" aria-hidden="true"></i>
                </button>
            </Link>
        </div>
    )
}