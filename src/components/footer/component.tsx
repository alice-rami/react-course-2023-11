import classNames from 'classnames';
import styles from './styles.module.css';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return <div className={classNames(styles.root, className)}>Footer</div>;
};
