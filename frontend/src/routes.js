import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import Authenticate from './pages/authenticate';
import ResetPassword from './pages/resetPassword';
import SetPassword from './pages/setPassword';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/authenticate" component={Authenticate}></Route>
                <Route path="/reset" component={ResetPassword}></Route>
                <Route path="/chancePassword" component={SetPassword}></Route>
            </Switch>
        </BrowserRouter>
    )
}