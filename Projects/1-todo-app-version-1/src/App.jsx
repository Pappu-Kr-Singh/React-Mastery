import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Creatine",
      dueDate: "30/02/2024",
    },
    {
      name: "Read Book",
      dueDate: "30/02/2024",
    },
  ]);

  const handleonClick = (todoName, dueDate) => {
    const newTodoitem = [
      ...todoItems,
      {
        name: todoName,
        dueDate: dueDate,
      },
    ];
    setTodoItems(newTodoitem);
  };

  const handleDeleteItems = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="main">
        <center className="todo__container">
          <TodoName />
          <AddTodo handleonClick={handleonClick} />
          {todoItems.length === 0 && <WelcomeMessage> </WelcomeMessage>}
          <TodoItems
            todoItems={todoItems}
            onDeleteButton={handleDeleteItems}
          ></TodoItems>
        </center>
      </div>
    </>
  );
}

export default App;
