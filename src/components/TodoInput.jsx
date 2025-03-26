import { useState } from "react";

export function TodoInput(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <h1 className="app-title">My Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter title"
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="form-input"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
          className="add-button"
          onClick={() => {
            if (title === "") {
              alert("Please enter a title");
              return;
            }

            props.addTodo({ title, desc });
            setDesc("");
            setTitle("");
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
