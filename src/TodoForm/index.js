import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'



function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodos,
        setOpenModal,

    } = React.useContext(TodoContext);


    const onWrite = (event) => {
        setNewTodoValue(event.target.value);

    }

    const onCancel  = () =>{
       setOpenModal(false);
    };

    
    const onSubmit  = (event) =>{
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    };

    return(

        <form className="Todo-form" onSubmit={onSubmit}>
            <label> 
                Escribe tu Nuevo To-Do amigue !
            </label>
            <textarea 
            value={newTodoValue}
            onChange={onWrite}
            placeholder="Escribe tu To-Do"

            
            >
                 </textarea>
            <div>
                <button

                type="button" 
                className="TodoButton-Cancel"
                onClick={onCancel}>
                    Cancelar
                    
                </button>

                <button 
                className="TodoButton-add"
                type="submit">
                    Anadir
                </button>
            </div>
        </form>
    )
}


export {TodoForm};