import React from "react";
import { useState } from "react";

function Timer() {
  const [timeId, setTimeId] = useState(0);

  const [cnt, setCnt] = useState(0);

  const startTimer = () => {
    if (0 === timeId) {
      setTimeId(
        setInterval(() => {
          setCnt((prev) => prev + 1);
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timeId);
    setTimeId(0);
  };

  // setTimeout(timeId);

  return (
    <div>
      <div>타이머 : {cnt}</div>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>끝</button>
    </div>
  );
}

export default Timer;
