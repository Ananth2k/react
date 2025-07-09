import React, { useRef, useState } from 'react'

function Timer() {

const [count, setCount] = useState(0);
const intervalRef = useRef(null);

const startTimer = () =>{
  if(intervalRef.current !== null) return;

  intervalRef.current = setInterval(()=>{
    setCount((prev) => prev +1)
  },1000)
}

const stopTimer = () =>{
  clearInterval(intervalRef.current);
  intervalRef.current = null;
}

const resetTimer = () => {
  stopTimer();    // First stop the interval (reuses the stopTimer function)
  setCount(0);    // Then reset the count
};



  return (
    <div>

      <h2>The time is {count}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default Timer