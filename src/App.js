import React, { useState } from "react";
import Form from "./Forms";
import Display from "./Display";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const markTaskAsComplete = (index) => {
    setTasks([
      ...tasks.slice(0, index),
      { ...tasks[index], completed: true },
      ...tasks.slice(index + 1),
    ]);
  };

  const removeTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <Display
        tasks={tasks}
        markTaskAsComplete={markTaskAsComplete}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
