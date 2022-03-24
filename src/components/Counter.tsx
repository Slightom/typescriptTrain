import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Clicked: {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </>
  );
};

export default Counter;
