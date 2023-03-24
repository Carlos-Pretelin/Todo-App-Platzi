import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";



function TodoCounter(){
    const {allTodos, finishedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="main-title">



             Has Completado {finishedTodos} de {allTodos} To-Dos

        </h2>
    )
}


export {TodoCounter};
