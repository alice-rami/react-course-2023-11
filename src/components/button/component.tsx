import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';
import { useTheme } from '../../theme-context/hook';

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
  const { theme } = useTheme();
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
