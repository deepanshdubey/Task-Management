import React from 'react'
import {TodoItem} from './TodoItem'
const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}> 
      <h1 className='text-'>Todo's List</h1>
      {props.todos.length===0? "No more tasks left":
      props.todos.map((todo) => {
        return (
          <>
        <TodoItem todos = {todo} key = {todo.sno} onDelete = {props.onDelete}/> <hr/> 
        </>
        )
      })
        }   
    </div>
    
  )
}
export default Todos
