
import { ListItem } from "../components/ListItem/listItem";
import { ToDo } from "../models/todo-item";

interface ComponentdProps {
    todos: ToDo[]
}

export const HomePage = ({todos}: ComponentdProps) => {
  return (
    <div className="container">
      {todos.map((todo: ToDo, idx: number) => {
        return <ListItem todo={todo} key={idx}/>;
      })}
    </div>
  );
};
