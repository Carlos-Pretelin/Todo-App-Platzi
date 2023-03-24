import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();



function TodoProvider (props){

    const {
        item: todos,
        savedItem: savedTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);


      const [searchValue, setSearchValueChange] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const finishedTodos = todos.filter( todo => !!todo.completed).length;
      const allTodos = todos.length;
    
      let searchedTodos = [];
    



      /* Esto se lee asi : Si searchValue.length es 1 o mayor ejecuta esto (Por defecto no se cumpliria la condicion por ser un string vacio), 
      pero al poner el signo ! esto niega la condicion entonces como por default el estado es un string vacio, la validacion se cumple y se ejecutara
      el codigo dentro, creo que es como decir "Ok si esta condicion es false mandala como 'true' y ejecuta lo de los parentesis" y si ya hay algo escrito
      en el searchValue  se pasa al else y se ejecuta el codigo que covierte los dos textos a minusculas para poder compararlo  */


      if (!searchValue.length >= 1){
    
        searchedTodos = todos;
    
      } else {
        searchedTodos = todos.filter(todo=>{
          const todoTextlow = todo.text.toLowerCase();
          const searchTextlow = searchValue.toLowerCase();
          return todoTextlow.includes(searchTextlow);
    
        })
      }
    
      

      const addTodos = (text) => {
        
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        savedTodos(newTodos);
    
    
      }



      const completeTodos = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        savedTodos(newTodos)
    
    
      }
    
      const deleteTodos = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        savedTodos(newTodos)
    
    
      }
    
    
     /*  React.useEffect(() => {
        console.log('use pito');
      }, [allTodos])
     */


    return(

        <TodoContext.Provider value={{

        loading,
        error,
        finishedTodos,
        allTodos,
        searchValue,
        setSearchValueChange,
        searchedTodos,
        addTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,

    }}>
        {props.children}
    </TodoContext.Provider>
    );
    
}

<TodoContext.Consumer></TodoContext.Consumer>


export {TodoContext, TodoProvider};