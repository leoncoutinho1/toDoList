import React from 'react'
import './PageHeader.css'

export default props => (
    <header className='pageHeader'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)