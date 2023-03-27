import React from "react";

function Display(props) {
    const { tasks, markTaskAsComplete, removeTask } = props;

    const handleCheckboxClick = (index) => {
        markTaskAsComplete(index);
    };

    const handleRemoveClick = (index) => {
        removeTask(index);
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li
                    key={index}
                    style={{ textDecoration: task.completed ? "line-through" : "" }}
                >
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheckboxClick(index)}
                    />
                    {task.text}
                    <button onClick={() => handleRemoveClick(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default Display;
