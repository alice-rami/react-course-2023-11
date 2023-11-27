interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
  min?: number;
  max?: number;
}

export const Counter = ({
  value,
  increment,
  decrement,
  min = 0,
  max = 5,
}: CounterProps) => {
  return (
    <div>
      <button onClick={decrement} disabled={value <= min}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
