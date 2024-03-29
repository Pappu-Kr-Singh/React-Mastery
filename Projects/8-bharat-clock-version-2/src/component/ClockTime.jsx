import React, { useEffect, useState } from "react";

function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // console.log("cancelled the interval");
    };
  }, []);

  return (
    <div className="time">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}

export default ClockTime;
