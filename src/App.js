import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { TodoList } from './components/TodoList';
import Card from './components/Card';

function App() {
  const [todos, setTodos] = useState([{ "title": "asd", "content": "asdaklsjda", "done": false }]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);


  const handleDelete = (todo) => {
    todo.done ? setCompletedTodos(completedTodos.filter(item => item!==todo)) : setTodos(todos.filter(item=> item!== todo)) 
  }

  const handleCloseCard = () => {
    setSelectedTodo(null);
  };

  const handleComplete = (todo) => {
    const updatedTodo = { ...todo, done: true };
    setCompletedTodos([...completedTodos, updatedTodo]);
    setTodos(todos.filter(item => item !== todo));
    setSelectedTodo(null); 
  };


  return (
    <div className="flex overflow-hidden items-center justify-center h-screen w-full bg-yellow-500 text-yellow-700  ">
      <div className='w-full flex h-full justify-center items-center'>
        <TodoList left={true} todos={todos} handleDelete={handleDelete} setSelectedTodo={setSelectedTodo} />
        <Main todos={todos} hidden={!selectedTodo} setTodos={setTodos} />


        <TodoList todos={completedTodos} handleDelete={handleDelete} setSelectedTodo={setSelectedTodo} />
      </div>
      {selectedTodo && (
        <Card
          todo={selectedTodo}
          onClose={handleCloseCard}
          onComplete={() => handleComplete(selectedTodo)}
       
        />
      )}
    </div>
  );
}


export default App;
