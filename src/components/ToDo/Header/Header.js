import useToDos from "../useToDos";
import { clearTodos } from "../state/actions";

const Header = () => {
  const [, dispatch] = useToDos();

  return (
    <div className="header">
      <h2>Things to do:</h2>
      <button onClick={() => dispatch(clearTodos())}>Clear to dos</button>
    </div>
  );
};

export default Header;
