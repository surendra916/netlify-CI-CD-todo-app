import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodosContext } from '../contexts/todos_contexts'

function Todo({ todo }) {

    const { deleteTodo } = useContext(TodosContext);

    return (
        <div className="row border rounded-8" >
            <div className="col-md-8" style={{
                backgroundColor : 'Background'
            }}>
                <h3 style={{
                    fontFamily: 'cursive',
                    fontWeight : 'bolder',
                    fontVariant : 'full-width'
                }}>{ todo.todoDescription }</h3>
            </div>
            <div className="col-md-4" style={{
                backgroundColor : 'ActiveCaption'
            }}>
                
                   
            <div className="mt-2 text-center">
                    <Link className="btn full-width btn-primary" to={`/edit/${todo.todoId}`}> Edit</Link>&nbsp;&nbsp;&nbsp;
                    <button className="btn full-width btn-success" onClick={()=> deleteTodo(todo.todoId)}> Complete</button>
                </div>
            </div>
        </div>
    )
}



export default Todo
