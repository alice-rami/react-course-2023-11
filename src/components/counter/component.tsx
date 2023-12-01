import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.css';

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
    <div className={classNames(styles.root)}>
      <Button
        onClick={decrement}
        disabled={value <= min}
        size='small'
        type='secondary'
        className={styles.buttonText}
      >
        −
      </Button>
      <span className={classNames(styles.value)}>{value}</span>
      <Button
        onClick={increment}
        disabled={value >= max}
        size='small'
        type='secondary'
        className={styles.buttonText}
      >
        +
      </Button>
    </div>
  );
};
