import Todos from "./components/Todos2";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, []);

  return (
    <div>
      <header>header</header>
      <main>
        <div>
          <Todos todos={todos} addTodo={addTodo} />
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </main>
    </div>
  );
}

export default App;
