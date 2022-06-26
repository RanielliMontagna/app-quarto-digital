import { Colors, FontSize, FontWeight } from 'shared';

export interface TypographyProps {
  size?: FontSize;
  weight?: FontWeight;
  children: React.ReactNode;
  color?: Colors;
  style?: React.CSSProperties;
  className?: string;
}
