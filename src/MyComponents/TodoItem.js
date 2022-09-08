import React from 'react'

export const TodoItem = ({todos, onDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc }</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todos)}} >Delete</button>
    </div>
  )
}

export default TodoItem