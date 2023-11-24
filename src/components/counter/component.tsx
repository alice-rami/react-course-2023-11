import { Dispatch, SetStateAction } from 'react';

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  step: number;
  min: number;
  max: number;
}

export const Counter = ({
  count,
  setCount,
  step,
  min = 0,
  max = 5,
}: CounterProps) => {
  return (
    <div>
      <button onClick={() => setCount(count - step)} disabled={count <= min}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + step)} disabled={count >= max}>
        +
      </button>
    </div>
  );
};
