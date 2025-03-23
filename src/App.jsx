import { useState, useEffect } from "react";
import "./index.css"; // Import the CSS file

function CustomToDo(props) {
  return (
    <div className={`todo-item ${props.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <h2 className="todo-title">{props.title}</h2>
        <p className="todo-description">{props.description}</p>
      </div>
      <div className="todo-actions">
        <button
          onClick={() => props.onDelete(props.id)}
          className="delete-button"
        >
          X
        </button>
      </div>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState(getItem());
  const [count, setCount] = useState(0);

  function getItem() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  function addTodo() {
    const newTodo = {
      id: count,
      title: title,
      description: desc,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setTitle("");
    setDesc("");
    setCount(count + 1);
  }

  function deleteTodo(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  return (
    <div className="todo-container">
      <h1 className="app-title">My Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="form-input"
        />
        <button onClick={addTodo} className="add-button">
          Add Todo
        </button>
      </div>
      {todo.map((element) => (
        <CustomToDo
          key={element.id}
          id={element.id}
          title={element.title}
          description={element.description}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
