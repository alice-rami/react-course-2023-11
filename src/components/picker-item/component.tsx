import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.css';
import { useTheme } from '../../theme-context/hook';

interface PickerItemProps {
  pickItem: () => void;
  value: string;
}

export const PickerItem = ({ pickItem, value }: PickerItemProps) => {
  const { theme } = useTheme();
  if (!value) {
    return null;
  }
  return (
    <Button
      onClick={() => pickItem()}
      className={classNames(styles.item)}
      theme={theme}
    >
      {value}
    </Button>
  );
};
