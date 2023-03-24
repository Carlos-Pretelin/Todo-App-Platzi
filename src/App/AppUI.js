import React from "react";
import { TodoContext } from "../TodoContext/index";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal/index';
import { TodoForm } from "../TodoForm";




function AppUI (){


  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);



    return(
        
    <React.Fragment>

    <TodoCounter/>
    
    <TodoSearch/>

    
    
      
        <TodoList>

        {error && <p>Hubo un error... </p>}
        {loading && <p>Estamos cargando no te aloques</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer To-Do 😁</p>}

        {searchedTodos.map (todo =>(


        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodos(todo.text)}
        onDelete={() => deleteTodos(todo.text)}
        

  />
))}


</TodoList>
      
    {!!openModal && (
      <Modal>
      <TodoForm/>

      
    </Modal>
    
    )}
    
    
    <CreateTodoButton
    setOpenModal={setOpenModal}
    />
    
    
    </React.Fragment>
  );

    
}



export {AppUI}