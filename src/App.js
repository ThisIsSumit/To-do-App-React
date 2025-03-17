import './App.css';
import Header from './my_components/header';
import Footer from './my_components/footer'
import Todos from './my_components/Todos';
import React, { useState } from 'react';
import AddTodo from './my_components/AddTodo';

function App() {
  const [todos,setTodos] = useState( [
    { id: 1, title: "first todo", desc: "complete your first task" },
    { id: 2, title: "go to gym", desc: "exercise for at least an hour" },
    { id: 3, title: "go to market", desc: "buy groceries and essentials" },
    { id: 4, title: "read a book", desc: "finish one chapter of a book" },
    { id: 5, title: "practice coding", desc: "solve at least 3 problems on LeetCode" },
    { id: 6, title: "call a friend", desc: "catch up with an old friend" },
    { id: 7, title: "work on project", desc: "complete the pending module" },
    { id: 8, title: "watch a tutorial", desc: "learn something new in programming" },
    { id: 9, title: "clean your room", desc: "organize desk and wardrobe" },
    { id: 10, title: "plan next day", desc: "set goals for tomorrow" }
  ]);
  
 const onDelete=(todo)=>{
  console.log("I am on delete");
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  console.log("deleted", todos)

  }
 
  
  return (
  <div >
    <Header  searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}></Todos>
    <AddTodo/>
    
    <Footer></Footer>
    
 </div >
  );
}

export default App;
