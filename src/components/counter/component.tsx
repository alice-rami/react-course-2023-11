import { Dispatch, SetStateAction } from 'react';

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const MIN_VALUE = 0;
const MAX_VALUE = 5;

export const Counter = ({ count, setCount }: CounterProps) => {
  return (
    <div>
      <button
        onClick={() => setCount(count > MIN_VALUE ? count - 1 : MIN_VALUE)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => setCount(count < MAX_VALUE ? count + 1 : MAX_VALUE)}
      >
        +
      </button>
    </div>
  );
};
