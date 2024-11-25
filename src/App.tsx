import React, { useState, useEffect } from "react"
import "./App.module.scss"
import Form from "./components/Form/Form"
import List from "./components/List/List"
import { todo } from "./types/types"
import { useTodos } from "./hooks/useTodos"
import cls from "./App.module.scss"
import FooterBar from "./components/FooterBar/FooterBar"

function App() {
  const [todos, setTodos] = useState<todo[]>(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [filter, setFilter] = useState<string>("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addItemHandler = (nameTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        nameTodo,
        id: crypto.randomUUID(),
        isCompleted: false,
      },
    ])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const sortedTodos = useTodos(todos, filter)

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={cls.App}>
      <h1 className={cls.title}>To do list</h1>
      <div className={cls.itemsBody}>
        <Form addItem={addItemHandler} />
        <List
          todos={sortedTodos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
        <FooterBar
          completedTodosCount={completedTodosCount}
          filtering={(filter) => setFilter(filter)}
          clearCompleted={() =>
            setTodos(todos.filter((todo) => !todo.isCompleted))
          }
        />
      </div>
    </div>
  )
}

export default App
