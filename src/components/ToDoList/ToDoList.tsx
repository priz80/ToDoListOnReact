import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'

interface ToDo {
  id: number,
  text: string,
  isDone: boolean
}

export const ToDoList = () => {
  const todo1: ToDo = {
    id: 0,
    text: 'Первая задача',
    isDone: false
  }
  
    return  (
        <div className="todo-container">
          <ul className="todo-list failed">
            <ToDoListItem />
          </ul>
          <ul className="todo-list completed">
            {/* <li className="todo-list-item__wrapper">
              <span>Вторая задача</span>
              <div className="todo-list-item__buttons">
                <button className="btn-trash"></button>
                <button className="btn-uncheck"></button>
              </div>
            </li> */}
            <ToDoListItem />
          </ul>
        </div>
    )
}