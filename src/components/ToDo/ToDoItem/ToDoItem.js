import useToDos from "../useToDos";
import { removeTodo } from "../state/actions";

const ToDoItem = ({ item }) => {
  const [, dispatch] = useToDos();

  return (
    <li className="list-item">
      <span>{item.value}</span>
      <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
    </li>
  );
};

export default ToDoItem;
