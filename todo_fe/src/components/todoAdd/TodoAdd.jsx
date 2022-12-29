import { useState } from "react";
import "./TodoAdd.css";


function TodoAdd() {

    const [task, setTask] = useState("");
    const [urgency, setUrgency] = useState("");

    const [counter, setCounter] = useState(0);

    const addTask = () => {
        fetch('http://localhost:9797/todos', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ task, urgency })
        });
        setCounter(counter + 1);
        document.getElementById("inputFieldTask").value = "";
        document.getElementById("inputFieldUrgency").value = "";
    };

    return (
        <div className="inputSection">
            <p className="counter">Tasks insgesamt: {counter}</p>
            <input className="inputTask" type="text" id="inputFieldTask" placeholder="Neues ToDo" onChange={(e) => { setTask(e.target.value) }} />
            <input className="inputUrgency" type="number" min="0" max="10" id="inputFieldUrgency" name="inputFieldUrgency" placeholder="Dringlichkeit 1 (niedrig) - 10 (hoch)" onChange={(e) => { setUrgency(e.target.value) }} />
            <input className="submitBtn" type="submit" value="+" onClick={addTask} />

        </div>
    );
};

export default TodoAdd;