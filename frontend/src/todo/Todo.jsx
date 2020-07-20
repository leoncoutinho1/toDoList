import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.refresh()
    }

    state = {
        description: '',
        list: []
    }

    refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => this.setState({...this.state, description, list: res.data}))
    }


    handleChange = (e) => {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd = () => {
        const description = this.state.description
        axios.post(URL, { description })
            .then(res => this.refresh())
            .catch(err => console.log(err))
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }

    handleMarkAsDone = (todo) => {
        axios.put(`${URL}/${todo._id}`, { done: true })
            .then(res => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }

    handleMarkAsPending = (todo) => {
        axios.put(`${URL}/${todo._id}`, { done: false })
            .then(res => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }

    handleSearch = () => {
        this.refresh(this.state.description)
    }

    handleClear = () => {
        this.refresh()
    }

    render() {
        return (
            <div id="todos">
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}