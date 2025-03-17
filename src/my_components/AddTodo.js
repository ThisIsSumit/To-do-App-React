import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]= useState("") 
    const submit=()=>{

    }
  return ( 
    <div className='container my-3'> 
    <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label for="title" className="form-label">Todo Title</label>
    <input type="text"  value={title}
     onChange={(e)=>setTitle(e.target.value)} 
      className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo description</label>
    <input type="text" value={desc} 
     onChange={(e)=>setDesc(e.target.value)} 
    className="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-primary btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
