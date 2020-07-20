import React from 'react'
import './IconButton.css'
import { faPlus, faTrashAlt, faCheck, faMap, faUndo, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    let icon, color

    switch (props.icon) {
        case 'plus':
            icon = faPlus
            color = 'add'
            break
        case 'trash':
            icon = faTrashAlt
            color = 'remove'
            break
        case 'check':
            icon = faCheck
            color = 'check'
            break
        case 'undo':
            icon = faUndo
            color = 'undo'
            break
        case 'search':
            icon = faSearch
            color = 'search'
            break
        case 'clear':
            icon = faTimes
            color = 'clear'
            break
        default:
            icon = faMap
            color = 'map'
    }
        
    if(props.hide) {
        return null
    } else {
        return (
            <button className={`IconButton ${color}`} onClick={props.onClick}>
                <i>
                    <FontAwesomeIcon icon={icon}/>
                </i>
            </button>
        )
    }
}