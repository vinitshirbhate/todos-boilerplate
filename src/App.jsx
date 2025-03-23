import React from "react";

const Home = () => {
  return (
    <>
      <div className="todo-container">
        <h1 className="app-title">My Todo List</h1>
        <div className="todo-form">
          <input type="text" placeholder="Enter title" className="form-input" />
          <input
            type="text"
            placeholder="Enter description"
            className="form-input"
          />
          <button className="add-button">Add Todo</button>
        </div>
        <div className={"todo-item"}>
          <div className="todo-content">
            <h2 className="todo-title">title</h2>
            <p className="todo-description">desc</p>
          </div>
          <div className="todo-actions">
            <button className="delete-button">X</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
