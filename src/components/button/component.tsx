import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
  type?: 'primary' | 'secondary';
  size?: 'big' | 'small';
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  type = 'primary',
  size = 'big',
  className,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.root, styles[type], styles[size], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
