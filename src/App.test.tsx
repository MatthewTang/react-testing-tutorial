import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './components/Counter';



//test block
test("increments counter", () => {

  render(<Counter />);

  const counter = screen.getByTestId('count');
  const incrementBtn = screen.getByTestId('increment');

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent('1');

})

