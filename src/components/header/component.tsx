import classNames from 'classnames';
import styles from './styles.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return <div className={classNames(styles.root, className)}>Header</div>;
};
