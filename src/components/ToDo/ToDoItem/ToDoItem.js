const ToDoItem = ({ item, handleDelete }) => {
  return (
    <li className="list-item">
      <span>{item.value}</span>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
