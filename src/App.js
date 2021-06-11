import './App.css';
import TodoForm from './components/TodoForm';
import TodosContextProvider from './contexts/todos_contexts';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import EditTodoForm from './components/EditTodoForm';
import AboutComponent from './components/AboutComponent';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        

          <TodosContextProvider>
              

              <Switch>
                <Route exact path="/" component={ TodoForm } />
                <Route path="/edit/:todoId" component={EditTodoForm}/>
                <Route path="/about" component={ AboutComponent } />
              </Switch>

        </TodosContextProvider> 
        

     </BrowserRouter>
    </div>
  );
}

export default App;
