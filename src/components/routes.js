import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import { About, HowTo } from './staticComponents';
import LoanWrapper from './loanwrapper';

export const Routes = (
    <Route>
        <Route exact path="/" component={Home}>
            <Route path="/about" component={About} />
            <Route path="/howto" component={HowTo} />
            <Route exact path="/loan/:http/:id" component={LoanWrapper} />
        </Route>
    </Route>
);
