import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { ThemeProvider } from '../../theme-context/component';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ThemeProvider>
        <Header className={classNames(styles.header)} />
        <main className={classNames(styles.main)}>{children}</main>
      </ThemeProvider>
      <Footer className={classNames(styles.footer)} />
    </div>
  );
};
