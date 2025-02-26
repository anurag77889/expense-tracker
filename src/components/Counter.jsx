import React from "react";
import { useCallback, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prevValue) => prevValue + 1);
    console.log("Incremented value");
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    console.log("Decremented value");
  }, []);
  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
