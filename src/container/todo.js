import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddBtn } from '../actions/todoAction'
import uuid from 'react-uuid'
import { Delete, Complete, Edit } from '../actions/todoAction'
import { Card, Button } from 'react-bootstrap'


class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            edit: false
        }
    }


    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    // setUpdate = e =>{
    //     this.setState({
    //        newText:e.target.value
    //     })
    // }
    saveTodo = todo => {
        this.setState({ ...todo, edit: true })
    }
    addOrEdit = () => {
        if (this.state.edit) {
            this.props.editNewTodo(this.state)
            this.setState({ text: '', edit: false })

        } else {
            this.props.addNewTodo({ text: this.state.text, id: uuid(), complete: false })
            this.setState({ text: '', edit: false })
        }
    }
    render() {
        return (
            <div >
                <div className='d-flex justify-content-center header '>
                    <input type='text' className='form-control' onChange={this.handleChange} value={this.state.text} />
                    <Button variant='primary' className='btn btn-default' onClick={this.addOrEdit}>{this.state.edit ? 'Edit' : 'ADD'}</Button>
                </div>
                <div className='d-flex flex-column added'>
                    {this.props.allTodos.map(el => <div> <h4 className={el.complete ? 'todoDone' : 'todoNotDone'}>{el.text}</h4>
                        <Button variant='primary' onClick={() => this.props.newTodoCompleted(el.id)}>{el.complete ? 'undo' : 'complete'}</Button>
                        <Button variant='primary' onClick={() => this.props.deleteNewTodo(el.id)}>delete</Button>
                        <Button variant='primary' onClick={() => this.saveTodo(el)}>Edit</Button>
                    </div>)}
                </div>


            </div >


        )
    }
}
const mapStateToProps = state => {
    return {
        allTodos: state.todo
    }
}
const mapDispatchToprops = dispatch => {
    return {
        addNewTodo: todo => dispatch(AddBtn(todo)),
        deleteNewTodo: id => dispatch(Delete(id)),
        newTodoCompleted: done => dispatch(Complete(done)),
        editNewTodo: edited => dispatch(Edit(edited))

    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Todos)