import React from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'

export  function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}) {
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
                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={()=> completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            </section>
          </div>
        </>
      )
}
