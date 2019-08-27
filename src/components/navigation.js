import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <NavLink to="/" className="navbar-brand">MoneyWORTH</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to="/about">What is MoneyWORTH?</NavLink></li>
                    <li><NavLink to="/howto">How to Use</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}