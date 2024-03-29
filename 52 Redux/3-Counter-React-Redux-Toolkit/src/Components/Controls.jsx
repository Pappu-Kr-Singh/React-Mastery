import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { couterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(couterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(couterAction.decrement());
  };
  const handleAdd = () => {
    dispatch(couterAction.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(couterAction.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success "
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center row-input">
        <input
          type="text"
          placeholder="Enter Number"
          className="input-num"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info " onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger "
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
