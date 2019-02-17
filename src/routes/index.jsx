import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from './../components/book/add';
import Main from './../components/main';
import View from './../components/book/view';
import Error from '../components/error/index';
import Router from './../router';

const Routes = () => (
    <BrowserRouter>
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/book/add" component={Add}/>
                <Route exact path="/book/:id" component={View}/>
                <Route exact path="/error" component={Error}/>
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    </BrowserRouter>
);

export default Routes;