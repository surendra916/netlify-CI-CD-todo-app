
import React, { useContext, useState ,useRef } from 'react'
import { Link } from 'react-router-dom';

import { TodosContext } from '../contexts/todos_contexts';
import TodosList from './TodosList';


function TodoForm() {

    
    const { add, loading } = useContext(TodosContext);
    //console.log('loadin status is ',loading)

    const [todo, setTodo] = useState("");
    const statusRef = useRef();

    function handleClick() {
        const obj = {
            todoDescription: todo,
            isCompleted : statusRef.current.value
        }
        add(obj);
        if (!loading)
            setTodo("")
    }

   
    return (
        <div className="container">
            <h3 className="mb-4 mt-4" style={{
                color : 'purple'
            }}> A Simple TODO Application </h3>
                    
            <div className="row">
                
            <div className="text-center col-md-8">
                    
                    <input type="email" style={{
                        fontFamily: 'cursive',
                        fontSize : 16
                    }} value={todo} onChange={
                        e => setTodo(e.target.value)
                    } className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Todo Note in here !!!"/>

                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <select ref={ statusRef } className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="0" defaultValue>NO</option>
                        <option value="1">Yes</option>
                    </select>
                    <label htmlFor="gg">Please Select Todo Status</label>
                    </div>
                </div>
            </div>
            <br />
            <button onClick={handleClick} type="button" className="btn btn-primary btn-lg btn-block">Add Todo</button>
            &nbsp;&nbsp;&nbsp;<Link to="/about" className="btn btn-info btn-lg btn-block">About</Link>

        <TodosList />
        </div>
    )
}




export default TodoForm;
