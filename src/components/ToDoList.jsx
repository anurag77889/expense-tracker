import React, { useCallback } from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = useCallback(() => {
    if (input.trim() !== "") {
      console.log("Task Added");
      setTasks((prevTasks) => [...prevTasks, input]);
      setInput("");
    } else {
      console.log("Task cannot be added");
    }
  }, [input]);

  return (
    <>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
