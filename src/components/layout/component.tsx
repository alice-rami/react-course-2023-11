import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Header className={classNames(styles.header)} />
      <main className={classNames(styles.main)}>{children}</main>
      <Footer className={classNames(styles.footer)} />
    </div>
  );
};
