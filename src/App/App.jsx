import { useState } from "react";
import { useLocalStorage } from '../Hooks/uselocalStorage/index'
import './App.css'
import {AppUI} from "./AppUI";

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue,setSearchValue] = useState("")

  //Getting how many todos do we have that have the "completed" atribute on "true"
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  //getting how many todos do we have in total
  const totalTodos = todos.length;

  //Filtering todos
  const searchedTodos = todos.filter(
    
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);


    }
  )
  
  // Función para marcar un todo como completado
  const completeTodo = (text) => {
    // Crea una copia del arreglo de todos actual
    const newTodos = [...todos]
    // Busca el índice del todo que coincide con el texto proporcionado
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // Marca el todo correspondiente como completado
    newTodos[todoIndex].completed = true ;
    // Guarda los todos actualizados y actualiza el estado
    saveTodos(newTodos);
  }

  // Función para eliminar un todo
  const deleteTodo = (text) => {
    // Crea una copia del arreglo de todos actual
    const newTodos = [...todos]
    // Busca el índice del todo que coincide con el texto proporcionado
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // Elimina el todo correspondiente del arreglo
    newTodos.splice(todoIndex, 1);
    // Guarda los todos actualizados y actualiza el estado
    saveTodos(newTodos);
  }
  
  return (
    <AppUI     
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo = {deleteTodo}
      />
  )
}




export default App
