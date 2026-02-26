import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { ToDoListPage } from "./pages/ToDoListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ToDo } from "./models/todo-item";
import { NoteFound } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescription";
import { Layout } from "./Layout/Layout";

const todos: ToDo[] = [
  { id: 0, text: "One", isDone: false },
  { id: 1, text: "Two", isDone: true },
  { id: 2, text: "Free", isDone: false },
  { id: 3, text: "Four", isDone: true },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoteFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      },
      {
        path: '*',
        element: <NoteFound />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
