interface PickerItemProps {
  pickItem: () => void;
  value: string;
}

export const PickerItem = ({ pickItem, value }: PickerItemProps) => {
  if (!value) {
    return null;
  }
  return <button onClick={() => pickItem()}>{value}</button>;
};
