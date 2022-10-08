import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  }


  const decrementCounter = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="count">{count}</p>
      <button data-testid="increment" onClick={incrementCounter}>+</button>
      <button data-testid="decrement" onClick={decrementCounter}>-</button>
    </div>
  )
}

export default Counter;
