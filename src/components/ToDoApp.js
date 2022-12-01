import React, { useState } from "react";
import ToDo from "./ToDo";

import "./ToDoApp.css";

function ToDoApp() {
  const [title, setTitle] = useState("Hola");
  const [todo, setTodo] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodo([...todo, newToDo]);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todo];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTodo(temp);
  }

  function handleDelete(id) {
    const temp = todo.filter(item => item.id !== id);
    setTodo(temp);

  }

  return (
    <div className="todoContainer">
      <form className="todoForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input className="buttonCreate" type="submit" value="Create To Do" onClick={handleSubmit} />
      </form>

      <div className="todosContainer">
        {todo.map((item) => (
          <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default ToDoApp;
