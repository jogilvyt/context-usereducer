import ToDoItem from "../ToDoItem";
import useToDos from "../useToDos";

const ToDoList = () => {
  const [todos] = useToDos();

  return (
    <ul className="list">
      {todos.length ? (
        todos.map(item => <ToDoItem item={item} key={item.id} />)
      ) : (
        <p>There is nothing left to do!</p>
      )}
    </ul>
  );
};

export default ToDoList;
