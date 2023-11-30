import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditTodoForm } from "./EditTodoForm";

export const Todo = ({ task, toggleComplete, deleteTodo, EditTodo }) => {
  return (
    <div className="Todo">
      <p
        onclick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onclick={() => EditTodoForm(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onclick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
