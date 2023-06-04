import { useCallback, useState } from "react";
import Todos from "./components/Todos3";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const removeTodo = useCallback(
    (index: number) => {
      setTodos((t) => t.filter((_, i) => i !== index));
    },
    [setTodos]
  );

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, []);

  return (
    <div>
      <header>header</header>
      <main>
        <div>
          <Todos todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </main>
    </div>
  );
}

export default App;
