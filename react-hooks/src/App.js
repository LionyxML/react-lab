import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  const [{ count2, count3 }, setCounters] = useState({
    count2: 10,
    count3: 20,
  });

  return (
    <>
      <div>
        First example:
        <div>{count}</div>
        {/* call setCount this way... */}
        <button onClick={() => setCount(count + 1)}>+1</button>
        {/* or this way... */}
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          +1
        </button>
      </div>
      <hr />
      <div>
        Second example:
        <div>count 2: {count2}</div>
        <div>count 3: {count3}</div>
        <button
          onClick={() =>
            setCounters((currentState) => ({ count2: currentState.count2 + 1 }))
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            setCounters((currentState) => ({
              ...currentState,
              count2: currentState.count2 + 1,
            }))
          }
        >
          +1
        </button>
      </div>
    </>
  );
};

export default App;
