import React from 'react';
import { Route } from 'react-router-dom';
import App from './app';
import { About, HowTo } from './staticComponents';
import Home from './home';
import LoanWrapper from './loanwrapper';

export const Routes = (
    <Route>
        <Route exact path="/" component={Home} />
        <Route path="/loan/:http/:id?" component={LoanWrapper} />
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
    </Route>
);
