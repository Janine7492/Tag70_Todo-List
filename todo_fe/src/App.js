import './App.css';
import TodoAdd from './components/todoAdd/TodoAdd';
import ToDoList from './components/toDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Do this and then procrastinate</h1>
      <TodoAdd />
      <ToDoList />
    </div>
  );
}

export default App;
