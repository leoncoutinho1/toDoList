import React from 'react'
import IconButton from '../template/IconButton'
import './TodoForm.css'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    
    return (
        <div id='TodoForm' role='form'>
            <div>
                <input 
                    id='description' 
                    placeholder='Adicione uma tarefa' 
                    value={props.description} 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </div>
            <div className='buttonsForm'>
                <IconButton className='IconButton' onClick={props.handleAdd} icon='plus' />
                <IconButton className='IconButton' onClick={props.handleSearch} icon='search' />
                <IconButton className='IconButton' onClick={props.handleClear} icon='clear' />
            </div>
        </div>
    )
}