import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';
import { Theme } from '../../types/types';

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
  type?: 'primary' | 'secondary';
  size?: 'big' | 'small';
  theme?: Theme;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  type = 'primary',
  size = 'big',
  theme = 'light',
  className,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.root,
        styles[type],
        styles[size],
        { [styles.dark]: theme === 'dark' },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
