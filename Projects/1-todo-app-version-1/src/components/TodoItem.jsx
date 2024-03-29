import React from "react";

function TodoItem({ TodoName, TodoDate, onDeleteButton }) {
  return (
    <>
      <div className="container">
        <div className="row td-row">
          <div className="col-6">{TodoName}</div>

          <div className="col-4">{TodoDate}</div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger t-btn"
              onClick={() => onDeleteButton(TodoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
