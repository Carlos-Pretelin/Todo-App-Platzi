import React from "react";



function useLocalStorage (itemName, initialValue) {

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
  
    React.useEffect(() => {
  
  
      setTimeout( () => {
  
      try{
        const localStoreItem = localStorage.getItem(itemName);
        let parseItem;
  
  
    /* Si localStoreItem es null o un string vacio sen entra en el condicional creando un default de la lista de todos,
     si no va al else haciendo que en parseItem se guarden los todos creados po los usuarios */

     /* Si esto es False Ejecuta lo siguiente : */
    if(!localStoreItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItem = initialValue;
    } else {
      parseItem = JSON.parse(localStoreItem);
    }
  
    setItem(parseItem)
    setLoading(false);



      }  catch(error){

        setError(error)
  
          }
  
      }, 2000)
    });
    
  
  
    /* Actualizar el estado con los nuevos todos despues de hacer click en los spans del item ya sea el ondelete u oncomplete
    y va a guardar mis todos actualizados en el TODOSV1 para que al refrescar sigan ahi todos los Todo que deje */
  
    const savedItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      
      setItem(newItem);
      
      }  catch(error){
        setError(error)
      }
    }
  
    return{
      item,
      savedItem,
      loading,
      error
    }
      
    
  }

  export {useLocalStorage};