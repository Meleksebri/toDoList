import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskInfo) => {
    if (taskInfo.task === "") return;
    setTaskList([...taskList, taskInfo]);
  };

  const Done = (id) => {
    var newList = taskList.map((el) =>
      el.id === id ? { ...el, done: !el.done } : el
    );
    setTaskList(newList);
  };

  const Remove = (id) => {
    setTaskList(taskList.filter((el) => el.id != id));
  };
  return (
    <div className="App">
      <Header addTask={addTask} />
      {taskList.map((el) => (
        <div>
          <p
            key={el.id}
            style={{ textDecoration: el.done ? "line-through" : "none" }}
          >
            {el.task}
          </p>
          <button className="button" onClick={() => Done(el.id)}>
            Done
          </button>
          <button className="button" onClick={() => Remove(el.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
