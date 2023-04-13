import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import Users from './pages/Users'
function Routes(){
    return (
        <Router>
            <Switch>

            <Route exact path="/" Component={Home}/>
            <Route exact path="/usuarios" Component={Users}/>
            </Switch>
        </Router>
    )
}

export default Routes;