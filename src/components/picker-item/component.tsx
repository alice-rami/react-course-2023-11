import { Dispatch, SetStateAction } from 'react';

interface PickerItemProps {
  pickItem: Dispatch<SetStateAction<string>>;
  name: string;
}

export const PickerItem = ({ pickItem, name }: PickerItemProps) => {
  if (!name) {
    return null;
  }
  return <button onClick={() => pickItem(name)}>{name}</button>;
};
