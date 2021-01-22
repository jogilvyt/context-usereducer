import "./ToDo.css";
import ToDoProvider from "./ToDoProvider";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Form from "./Form";

const ToDo = () => {
  return (
    <ToDoProvider>
      <div className="wrapper">
        <Header />
        <ToDoList />
        <Form />
      </div>
    </ToDoProvider>
  );
};

export default ToDo;
