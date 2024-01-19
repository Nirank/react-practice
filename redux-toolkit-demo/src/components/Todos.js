import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import  {removeTodo} from '../features/todo/TodoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {
      todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))
    }
    </>

  )
}

export default Todos