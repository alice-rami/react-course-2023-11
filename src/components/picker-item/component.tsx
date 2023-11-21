import { ReactNode } from 'react';

interface PickerItemProps {
  children?: ReactNode | undefined;
}

export const PickerItem = ({ children }: PickerItemProps) => {
  return <button>{children}</button>;
};
