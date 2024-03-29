import React from "react";

function ClockTime() {
  let date = new Date();

  return (
    <div className="time">
      This is the current time: {date.toLocaleDateString()} -{" "}
      {date.toLocaleTimeString()}
    </div>
  );
}

export default ClockTime;
