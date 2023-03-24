import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const onClickButton = () =>{
        /* Esta Funcion  me permite mandarle este prevstate que nos va a devolver el estado anterior a mi actualizacion  */
        props.setOpenModal(prevState => !prevState)
    }

    return(

        <button

        className="addTodo-button"
        onClick={onClickButton}
         
         >

            +
            

        </button>
    )
}

export {CreateTodoButton};