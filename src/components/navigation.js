import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
            <nav>
                <h1>MoneyWORTH</h1>
                <div className="inline-navigation">
                    <Link to="/">Home</Link>
                    <Link to="/about">What is MoneyWORTH?</Link>
                    <Link to="/howto">How to Use</Link>
                    </div>
        </nav>
    )
}