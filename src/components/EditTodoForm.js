import React, { useContext, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { TodosContext } from '../contexts/todos_contexts';


function EditTodoForm() {

    const { todoId } = useParams();
    const { update,loading} = useContext(TodosContext);
    const history = useHistory();
    const [todo, setTodo] = useState("");
    const [msg, setMsg] = useState("");
    const statusRef = useRef();


    function handleClick() {
        const obj = {
            todoDescription: todo,
            isCompleted : statusRef.current.value
        }
        update(obj,todoId);
        if (!loading) {
            setTodo("")
            setMsg("Editing your Todo !!")
            !loading && history.push("/");
        }
    }

    return (
        <div>
            <h1 className="display-4" style={{
                fontFamily: 'unset',
                color : 'paleturquoise'
            }}>Edit todo form</h1>
            
            <div className="row mt-3">
                
            <div className="text-center col-md-8">
                    
                    <input type="email" value={todo} onChange={
                        e => setTodo(e.target.value)
                    } className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Todo Note to be updated !!!"/>

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
            <button onClick={handleClick} type="button" className="btn btn-primary btn-lg btn-block">Edit Todo</button>&nbsp;&nbsp;
            <Link className="btn btn-lg btn-secondary" to={`/`}>Go to Home</Link> 
            <br />
            <p className="display-3">{ msg }</p>
        </div>
    )
}

export default EditTodoForm
