import React, { useState } from "react";

function App() {
  const now = new Date().getMinutes();
  const [time, setTime] = useState(now);
  function getTime() {
    const newTime = new Date().getMinutes();
    setInterval(getTime, 1000);
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
