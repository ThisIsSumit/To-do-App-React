import React from 'react'
import {Todo} from './todo'
import ProtoTypes from 'prop-types'
export default function Todos(props) {
  let mystyle={
    minHeight:"70vh",
    margin:"10px auto"

  }
  return (
    <div className='container ' style={mystyle}>
        <h3 className='my-3 text-center'>Todo list</h3>
          {props.todos.length==0? "NO todos to display" : ""}
          {props.todos.map((todo)=>{
            return( 
             <>
             <Todo todo={todo} key= {todo.id} onDelete={props.onDelete}></Todo> 
             </>
             )
          })}
           
     
    </div>
  )
}

Todos.prototype={
    todos : ProtoTypes.array
}