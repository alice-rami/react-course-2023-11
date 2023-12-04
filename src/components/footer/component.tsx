import classNames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../button/component';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Button
        onClick={() => console.log('Контакты')}
        className={classNames(styles.button)}
      >
        Контакты
      </Button>
    </div>
  );
};
