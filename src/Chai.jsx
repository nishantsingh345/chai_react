import { useState } from "react";

const Chai = () => {
  const [count, setCount] = useState(1);

  let addcount = () => {
    if (count === 30) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  let minuscount = () => {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count is ready {count}</h1>
      <button onClick={addcount}>count add</button>
      <br />
      <button onClick={minuscount}>count minus</button>
    </>
  );
};

export default Chai;
