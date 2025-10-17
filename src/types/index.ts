export interface IModalProps<T> {
  isOpen: T | null;
  setIsOpen: React.Dispatch<React.SetStateAction<T | null>>;
  children: React.ReactNode;
  contentsStyle: string;
}
