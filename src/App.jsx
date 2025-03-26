import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [newTodo, setNewTodo] = useState([]);
  function addTodo(todo) {
    setNewTodo([...newTodo, todo]);
  }

  function deleteTodo(index) {
    let newTodList = [...newTodo];
    newTodList.splice(index, 1);
    setNewTodo(newTodList);
  }

  return (
    <div className="todo-container">
      <TodoInput addTodo={addTodo} />
      {/* <button onClick={() => setCount(count + 1)}>Count :{count}</button> */}
      {/* <div className="app-title">{count}</div> */}
      {newTodo.map((item, index) => {
        return <TodoList key={index} listItem={item} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default App;
