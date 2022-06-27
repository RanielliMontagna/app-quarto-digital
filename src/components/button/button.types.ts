import { Colors, Size, Variants } from 'shared';

export interface ButtonProps {
  color?: Colors;
  size?: Size;
  fullWidth?: true;
  variant?: Variants;
  startIcon?: JSX.Element;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
