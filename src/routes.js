import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import TaskPage from './pages/TaskPage';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/teste" component={TaskPage}/>
            </Switch>
        </BrowserRouter>
    );
}