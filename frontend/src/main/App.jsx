import './App.css'

import React from 'react'
import Menu from '../template/Menu'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'

export default props => (
    <div className='container'>
        <Router>
            <Menu />
            <Routes />
        </Router>
        
    </div>
)