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
]

function App() {
 

  return (
    <>
      <div className="grid grid-cols-2 gap-12 items-start">
        <section className='bg-white flex flex-col gap-4 p-4 items-items-start rounded-xl shadow-md'>
          <TodoCounter total={5} completed={3}/>
          <TodoSearch />
          <CreateTodoButton/>
        </section>

        <section className='bg-white rounded-xl p-x4'>
          <TodoList>
            {defaultTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
          </TodoList>
        </section>
      </div>
    </>
  )
}




export default App
