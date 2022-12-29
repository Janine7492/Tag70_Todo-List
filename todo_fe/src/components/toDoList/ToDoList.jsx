import { useEffect, useState } from "react";
import ToDoCard from "../toDoCard/ToDoCard";
import "./ToDoList.css";

function ToDoList() {

    // const [task, setTask] = useState("");

    // const [urgency, setUrgency] = useState("");


    const [taskList, setTaskList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9797/todos')
            .then(res => res.json())
            .then(data => setTaskList(data))
    })

    // const [counter, setCounter] = useState(0);

    // const add = () => {
    //     setTaskList(oldArray => [...oldArray, { task: task, urgency: urgency }]);
    //     console.log(taskList);
    //     setCounter(counter + 1);
    // };

    return (
        <>
            {/* <p className="counter">Tasks insgesamt: {counter}</p> */}
            {/* <div className="inputSection">
                <input className="inputTask" type="text" id="inputFieldTask" placeholder="Neues ToDo" onChange={(e) => { setTask(e.target.value) }} />
                <input className="inputUrgency" type="number" min="0" max="10" id="inputFieldUrgency" placeholder="Dringlichkeit 1 (niedrig) - 10 (hoch)" onChange={(e) => { setUrgency(e.target.value) }} />
                <input className="submitBtn" type="submit" value="+" onClick={add} />

            </div> */}

            {taskList.map((singleTask, index) => <ToDoCard key={index} task={singleTask.task} urgency={singleTask.urgency} />)}
        </>
    );
};

export default ToDoList;