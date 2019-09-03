import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">MoneyWORTH</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/about">What is MoneyWORTH?</Link></li>
                    <li><Link to="/howto">How to Use</Link></li>
                </ul>
            </div>
        </nav>
    )
}