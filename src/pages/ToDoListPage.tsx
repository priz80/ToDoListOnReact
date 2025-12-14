import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast, ToastContainer } from "react-toastify"

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: Date.now(), // уникальный ID
      text,
      isDone: false,
    }
    setTodos(prev => [...prev, newToDo]) // используем функциональный подход
    toast.success("Задача добавлена!")
  }

  const updateToDo = (toDoItem: ToDo) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === toDoItem.id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
    const status = toDoItem.isDone ? "возвращена в работу" : "выполнена"
    toast.info(`Задача "${toDoItem.text}" ${status}`)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    setTodos(prev => prev.filter(todo => todo.id !== toDoItem.id))
    toast.warn("Задача удалена")
  }

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}
