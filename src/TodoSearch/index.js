import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch (){

   const {searchValue, setSearchValueChange} = React.useContext(TodoContext);

    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
        setSearchValueChange(event.target.value);
    }

    return(
        <input 
        className="search-input" 
        placeholder='Busca tus To-Dos' 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch};