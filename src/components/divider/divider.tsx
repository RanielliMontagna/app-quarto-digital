import { FC, memo } from 'react';
import { DividerComponent } from './divider.styles';

interface DividerProps {
  styles?: React.CSSProperties;
}

const Divider: FC<DividerProps> = ({ styles }) => {
  return <DividerComponent style={styles}></DividerComponent>;
};

export default memo(Divider);
