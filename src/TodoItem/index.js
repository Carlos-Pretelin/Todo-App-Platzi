import React from "react";
import './TodoItem.css';

function TodoItem (props){


    return(
        <li className="list-item">
            <span

             className={`checkmark-icon ${props.completed && 'checkmark-icon_completed' }`}
             onClick={props.onComplete}
             >
                ✔


            </span>

            <p className={`todo-item-P ${props.completed && 'todo-item-P_completed'}`}>{props.text}</p>
            
            <span
             className="delete-icon"
             onClick={props.onDelete}
             >
                
                ✘
                
            </span>
        </li>
    )
}

export {TodoItem};