import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default props => (
    <Switch>
        <Route path='/todos'>
            <Todo/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
    </Switch>
)