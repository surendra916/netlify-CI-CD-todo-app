import { createContext, useEffect, useState } from 'react';
import http from '../config/api'

export const TodosContext = createContext();

function TodosContextProvider({ children }) {
    
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        
        async function getTodosOnStartup() {
            try {
                setLoading(true);
                const { data } = await http.get("/getAllTodos");
                setTodos(data);
                setLoading(false);
            } catch (error) {
               // console.log('error occured ',error);
                setLoading(false);
                setTodos([]);

                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    console.log('whattttt', error.request);
          
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('OMG WORKED', error.message);
                  }

            }
        }

        getTodosOnStartup();

    },[])

    const addTodo = async (obj) => {

        const headers = {
            'Content-Type' : 'application/json'
        }

        try {
            setLoading(true);
            const { data } = await http.post('/create',obj,headers);
            //console.log('response from server is ', data);
            setLoading(false);
            setTodos([...todos, data]);
            
        } catch (error) {
            setLoading(false);
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log('whattttt', error.request);
                
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('OMG WORKED', error.message);
              }
        }

    }

    const deleteTodo = async (todoId) => {
        var old_todos = todos;
        try {
            
            const updated = todos.filter(todo => parseInt(todo.todoId) !== parseInt(todoId));
            setTodos(updated);

            const { status } = await http.delete(`/delete/${todoId}`);
            //const updatedTodos = todos.map(todo => parseInt(todoId) === parseInt(todo.todoId) ? data : todo);
            console.log('status is ',status);
            if (status !== 200)
                setTodos(old_todos)

            
        } catch (error) {
            setTodos(old_todos);
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log('whattttt', error.request);
                //alert('Network Error : Please Check your Internet Connection !!!')
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('OMG WORKED', error.message);
              }
        }
    }

    const updateTodo = async (obj,todoId) => {
        var old_todos = todos;
        try {
            
            const updatedTodos = todos.map(todo => parseInt(todoId) === parseInt(todo.todoId) ? obj : todo);
            setTodos(updatedTodos);
            const { status } = await http.put(`/update/${todoId}`, obj);
            //const updatedTodos = todos.map(todo => parseInt(todoId) === parseInt(todo.todoId) ? data : todo);
            //setTodos(updatedTodos);
            if (status !== 200)
                setTodos(old_todos)
                
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log('whattttt', error.request);
                
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('OMG WORKED', error.message);
              }
        }  
    }


    return <TodosContext.Provider value={{ todos ,loading , add : addTodo, deleteTodo : deleteTodo , update : updateTodo }}>
        { todos && children }
    </TodosContext.Provider>

}

export default TodosContextProvider;
