import React from 'react';

export default function Navigation() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand">MoneyWORTH</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="#">What is MoneyWORTH?</a></li>
                    <li><a href="#">How to Use</a></li>
                </ul>
            </div>
        </nav>
    )
}