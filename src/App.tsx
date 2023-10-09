import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <main>
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </main>
    </div>
  );
}

export default App;
