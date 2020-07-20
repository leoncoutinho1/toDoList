import React from 'react'
import If from '../template/If'
import IconButton from '../template/IconButton'
import './TodoList.css'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <div key={todo._id} className='listItem'>
                <p className={todo.done ? 'markedAsDone' : ''}>{todo.description}</p>
                <div className='buttons'>
                    <If test={!todo.done}>
                        <IconButton className='IconButton' icon='check' onClick={() => props.handleMarkAsDone(todo)}/>
                    </If>
                    <If test={todo.done}>
                        <IconButton className='IconButton' icon='undo' onClick={() => props.handleMarkAsPending(todo)}/>    
                        <IconButton className='IconButton' icon='trash' onClick={() => props.handleRemove(todo)}/>
                    </If>
                </div>
            </div>
            
        ))
    }
    return (
        <div id='TodoList'>
            {renderRows()}
        </div>
    )
}
    
