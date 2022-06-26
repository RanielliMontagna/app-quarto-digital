import { Typography } from 'components';
import { FC, memo } from 'react';
import * as styled from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ children, color, size, fullWidth, variant, startIcon, onClick }) => {
  return (
    <styled.Button
      color={color ?? 'secondary'}
      fullWidth={fullWidth ?? false}
      size={size ?? 'md'}
      className={variant ?? 'normal'}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '6px' }}>
        {startIcon}
      </div>
      <div style={{ whiteSpace: 'nowrap' }}>
        <Typography weight="bold">{children}</Typography>
      </div>
    </styled.Button>
  );
};

export default memo(Button);
