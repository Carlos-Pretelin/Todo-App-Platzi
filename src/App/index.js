import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



/* 
const defaultTodos = [
  { text: 'Hola Mundo', completed: true},
  { text: 'Raymundo', completed: false},
  { text: 'Culear a tu mama', completed: true},
  { text: 'Hola Mario', completed: false},
  { text: 'Tequiero chupar el bollo', completed: false}
]; */





function App() {


 
  return (

    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
    
}

export default App;
