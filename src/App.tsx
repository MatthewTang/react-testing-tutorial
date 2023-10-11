import { useRef, useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const [renderCount, setRenderCount] = useState(0);

  // use ref to keep render count
  const renderCount = useRef(1);

  const increment = () => {
    setCount((c) => c + 1);
  };

  /* // this will cause an infinite loop */
  /* useEffect(() => { */
  /*   setRenderCount((c) => c + 1); */
  /* }); */

  // this will not cause an infinite loop
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <main>
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
        {/* <div>Render Count: {renderCount}</div> */}
        <div>Render Count: {renderCount.current}</div>
      </main>
    </div>
  );
}

export default App;
