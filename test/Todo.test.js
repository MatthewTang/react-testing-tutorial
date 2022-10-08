
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import Todos from '../src/components/Todos';

jest.mock('axios');

const dummpTodos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
];


test("todos list", async () => {
  axios.get.mockResolvedValue({ data: dummpTodos });
  render(<Todos />);

  const todoList = await waitFor(() => screen.findAllByTestId('todo'));

  expect(todoList).toHaveLength(3);
});
