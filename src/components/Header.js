import React, { useState, useId } from "react";

const Header = ({ addTask }) => {
  const [task, setTask] = useState({
    id: useId(),
    task: "",
    done: false,
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTask({ ...task, task: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    addTask(task);
    setTask({
      id: Math.random(),
      task: "",
      done: false,
    });
  }
  return (
    <div className="header">
      <input
        placeholder="Add todo"
        type="text"
        onChange={handleTaskInputChange}
        value={task.task}
      ></input>
      <button className="button" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default Header;
