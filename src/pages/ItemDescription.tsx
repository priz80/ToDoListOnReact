// src/pages/ItemDescription.tsx
import { useParams, useNavigate } from "react-router-dom";
import { ToDo } from "../models/todo-item";
import { useEffect, useState } from "react";

export const ItemDescription = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        const todos: ToDo[] = JSON.parse(saved);
        const found = todos.find(t => t.id === Number(id));
        setTodo(found || null);
      } catch (e) {
        setTodo(null);
      }
    }
  }, [id]);

  if (!todo) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Задача не найдена</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Описание задачи</h2>
      <p><strong>Текст:</strong> {todo.text}</p>
      <p><strong>Статус:</strong> {todo.isDone ? "Выполнено" : "В работе"}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};