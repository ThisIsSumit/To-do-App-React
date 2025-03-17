import './App.css';
import Header from './my_components/header';
import Footer from './my_components/footer';
import Todos from './my_components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './my_components/AddTodo';
import About from './my_components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let id = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
    const myTodo = { id, title, desc };
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <Header title="My Todo List" searchBar={true} />
      <Routes>
        <Route
          exact path="/home"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
