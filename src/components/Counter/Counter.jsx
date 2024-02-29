import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleAdd}>Up</button>
      <p>{count}</p>
      <button onClick={handleRemove}>Down</button>
    </>
  );
};
export default Counter;
