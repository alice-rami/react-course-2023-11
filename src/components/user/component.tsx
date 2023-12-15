import classNames from 'classnames';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface UserProps {
  children: ReactNode;
}

export const User = ({ children }: UserProps) => {
  return <p className={classNames(styles.user)}>{children}</p>;
};
