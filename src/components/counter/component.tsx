import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.css';
import { useTheme } from '../../theme-context/hook';

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
  const { theme } = useTheme();
  return (
    <div className={classNames(styles.root)}>
      <Button
        onClick={decrement}
        disabled={value <= min}
        size='small'
        type='secondary'
        className={styles.buttonText}
        theme={theme}
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
        theme={theme}
      >
        +
      </Button>
    </div>
  );
};
