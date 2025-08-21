import React, { useState } from "react";
import todos from "./todos.json";

function TodoTracker() {
  const [showCompleted, setShowCompleted] = useState(false);

  const filtered = showCompleted
    ? todos.filter((t) => t.completed)
    : todos;

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16 }}>
      <h2>Todo Tracker</h2>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          {" "}Show Completed Only
        </label>
        <span>|</span>
        <span>Total: {total}</span>
        <span>Completed: {completed}</span>
        <span>Pending: {pending}</span>
      </div>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
        {filtered.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#fafafa"
            }}
          >
            <input type="checkbox" checked={todo.completed} readOnly />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black"
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoTracker;
