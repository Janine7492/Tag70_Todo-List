import "./ToDoCard.css";
import { useState } from "react";

function ToDoCard(props) {

    const [done, setDone] = useState("open");

    const changeClass = () => {
        done === "open" ? setDone("done") : setDone("open")
    }

    return (
        <article className={`toDoCard ${done}`} onClick={changeClass}>
            <p className="toDoCardTask" >{props.task}</p>
            <p className={props.urgency > 7 ? "high" : props.urgency < 4 ? "low" : "middle"}>Dringlichkeit: {props.urgency}</p>
        </article>
    );
};

export default ToDoCard;

// onClick={done === "open" ? setDone("done") : setDone("open")}