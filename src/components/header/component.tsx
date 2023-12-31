import classNames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../button/component';
import { useTheme } from '../../theme-context/hook';
import { ThemeProvider } from '../../theme-context/component';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider>
      <div className={classNames(styles.root, className)}>
        <Button
          onClick={() => {
            if (toggleTheme) {
              toggleTheme(theme);
            }
          }}
          className={classNames(styles.button)}
          type='secondary'
        >
          Сменить тему
        </Button>
        <Button
          onClick={() => console.log('Заказ')}
          className={classNames(styles.button)}
        >
          Заказ
        </Button>
      </div>
    </ThemeProvider>
  );
};
