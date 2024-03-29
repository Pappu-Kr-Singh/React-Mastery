import { useState } from "react";
import TodoName from "./TodoName";

function AddTodo({ handleonClick }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleOnChangeName = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleOnChangeDate = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleonClick(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleOnChangeName}
          />
        </div>
        <div className="col-4">
          <input type="date" name="date" onChange={handleOnChangeDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success t-btn"
            value={dueDate}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
