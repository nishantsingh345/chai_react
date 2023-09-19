import { useState } from "react";

const Chai = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>Count is ready {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count add
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        count minus
      </button>
    </>
  );
};

export default Chai;
