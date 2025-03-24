import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("component rendered")

  return (
    <div>
        <h1>{count}</h1>
      <button 
        onClick={handleClick}
      >
        GO 
      </button>
    </div>
  );
};

export default Counter;