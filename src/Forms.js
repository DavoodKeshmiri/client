import React, { useState } from "react";

function Form(props) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            props.addTask(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
