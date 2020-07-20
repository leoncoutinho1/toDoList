import React from 'react'
import './Menu.css'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

export default props => (
    <nav>
        <div id='header'>
            <div id='logo'>
                <a href="/#">
                    <i><FontAwesomeIcon icon={faCalendarCheck} /></i> TodoApp
                </a>
            </div>
            <div id='pages'>
                <ul>
                    <li className=''><Link to="/todos">Tarefas</Link></li>
                    <li className=''><Link to="/about">Sobre</Link></li>
                </ul>
            </div>
        </div>
    </nav>
)