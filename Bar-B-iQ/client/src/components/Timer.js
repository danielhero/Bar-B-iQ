import React, { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimer(0);
    setIsActive(false);
  }

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes} : ${getSeconds}`;
  };

  useEffect(() => {
    if (isActive) {
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(countRef.current);
    }
    return () => clearInterval(countRef.current);
  }, [isActive, timer]);

  return (
    <div className="app">
      <div className="time">{formatTime()}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
