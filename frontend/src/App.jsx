import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { CardWrapper } from '../components/CardWrapper'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    setInterval(()=>{
      fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos)
      })
    },10000)
  },[])


  return (
    <div>
        <h1>Todo App (MERN stack)</h1>
        
      <CardWrapper><h2>Add a Todo</h2><CreateTodo></CreateTodo></CardWrapper>
      <h2>List of Todos</h2>
      {todos.map(todos => <CardWrapper><Todos key={todos.id} todos={todos}></Todos></CardWrapper>)}
    </div>
  )
}

export default App
