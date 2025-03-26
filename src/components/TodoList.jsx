export default function TodoList(props) {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <h2 className="todo-title">{props.listItem.title}</h2>
        <p className="todo-description">{props.listItem.desc}</p>
      </div>
      <div className="todo-actions">
        <button
          className="delete-button"
          onClick={() => {
            props.deleteTodo(props.listItem.index);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
