import { useState } from "react";

import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import './App.css'


const defaultTodos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Limpiar la casa', completed:true},
  {text:'Llorar con la llorona', completed:false},
  {text:'Estudiar', completed:true},
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)
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
  
  return (
    <>
      <div className="grid grid-cols-2 gap-12 items-start">
        <section className='bg-white flex flex-col gap-4 p-4 items-items-start rounded-xl shadow-md'>
          <TodoCounter total={totalTodos} completed={completedTodos}/>
          <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}

          />
          <CreateTodoButton/>
        </section>

        <section className='bg-white rounded-xl p-x4'>
          <TodoList>
            {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
          </TodoList>
        </section>
      </div>
    </>
  )
}




export default App
