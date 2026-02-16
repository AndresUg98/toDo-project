import {useEffect, useState} from 'react'

// const defaultTodos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Limpiar la casa', completed:true},
//   {text:'Llorar con la llorona', completed:false},
//   {text:'Estudiar', completed:true},
// ]


// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

//localStorage.removeItem('TODOS_V1');


function useLocalStorage(itemName, initalValue){

  const [item, setItem] = useState(initalValue);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);



  useEffect(() => {
    
    try{
      const localStorageItem = localStorage.getItem(itemName)

      let parsedItem;
  
  
      if (!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parsedItem = initalValue
      }else{
        parsedItem = JSON.parse(localStorageItem)
      }
  
      setLoading(false)
    }catch (e){
      setError(true)
    }
  });


  // Define la función saveTodos que toma un arreglo de nuevos todos como argumento
  const saveItem = (newItem) => {
    // Guarda los nuevos todos en localStorage bajo la clave itemName, convirtiéndolos primero a una cadena de texto JSON
    localStorage.setItem(itemName, JSON.stringify(newItem));
    // Actualiza el estado local de los todos usando setTodos con los nuevos todos
    setItem(newItem);
  }

  return{
    item, 
    saveItem, 
    loading,
    error
  }

}

export {useLocalStorage}
