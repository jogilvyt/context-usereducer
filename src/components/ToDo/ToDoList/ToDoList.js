import ToDoItem from "../ToDoItem";

const ToDoList = ({ todos, handleDelete }) => {
  return (
    <ul className="list">
      {todos.length ? (
        todos.map(item => (
          <ToDoItem item={item} handleDelete={handleDelete} key={item.id} />
        ))
      ) : (
        <p>There is nothing left to do!</p>
      )}
    </ul>
  );
};

export default ToDoList;
