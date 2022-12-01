import React, { useState } from "react";

export default function ToDo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick(e) {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onClick={handleSubmit}>
        <input className="todoInput" type="text" onChange={handleChange} value={newValue} />
        <button className="todoUpdate" onClick={handleClick}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="todoEdit" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="todoDelete" onClick={(e) => onDelete(item.id)} >Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
