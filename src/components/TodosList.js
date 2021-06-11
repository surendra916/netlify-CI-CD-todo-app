import React, { useContext } from 'react'
import { TodosContext } from '../contexts/todos_contexts'
import LoadingSpinner from './LoadingSpinner';
import Todo from './Todo';


function TodosList() {

    const { todos,loading } = useContext(TodosContext)  
    const mappedTodos = todos && todos.map((todo,index) => <Todo key={index} todo={todo}/>)

    const result = loading ? <LoadingSpinner /> : todos && todos.length > 0 ? mappedTodos : <div class="alert alert-info" role="alert">
    Yeahhh No todos Left !!!! 
  </div>;

    return (
        <div className="mt-4 mx-auto container ">
            <h3 className="mx-auto mb-4" style={{
                color: 'HighlightText',
                fontFamily : 'cursive'
            }}>Check these todos !!! </h3>
            
            { result }
            <br />
            <br />
            
        </div>
    )
}
export default TodosList
