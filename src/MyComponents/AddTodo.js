import React from "react";
import { useState } from "react";
const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!desc || !title) {
      alert("Title or Description cannot be blank.");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Task</h3>

      <form onSubmit={submit} className="row g-3">
        <div className="col-auto">
          <label htmlFor="Title" className="visually-hidden">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            placeholder="Task Name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            id="todoDesc"
            placeholder="Task Desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success btn-sm mb-3">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
