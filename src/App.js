import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import  {About}  from "./MyComponents/About";
import React, { useState } from "react";
import { useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

function App() {
  let initTodo;
  
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I'm on delete", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      desc: desc,
      title: title,
      sno: sno,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="My Todo's List" searchbar={true} />

      <Routes>
          <Route exact path="/" render = {()=> {
            return(
            <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                  </>)
          }}>
          </Route>
{/* 
          <Route exact path="/about">
            <About />
          </Route> */}
        </Routes>
      <Footer />
      </Router>
    </>
  );
}
export default App;
