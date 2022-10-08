import { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
  const [todoList, setTodoList] = useState<any[]>([]);

  useEffect(() => {
    (
      async () => {
        const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodoList(todos.data);
      }
    )();
  }, [])

  return todoList ? (
    <ul>{todoList.map((todo: any, index: any) => (
      <li key={index} data-testid='todo'>{todo.title}</li>
    ))}</ul>
  ) : (
    <p>Loading...</p>
  )
}

export default Todos;
