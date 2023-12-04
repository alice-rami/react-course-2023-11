import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.css';

interface PickerItemProps {
  pickItem: () => void;
  value: string;
}

export const PickerItem = ({ pickItem, value }: PickerItemProps) => {
  if (!value) {
    return null;
  }
  return (
    <Button onClick={() => pickItem()} className={classNames(styles.item)}>
      {value}
    </Button>
  );
};
