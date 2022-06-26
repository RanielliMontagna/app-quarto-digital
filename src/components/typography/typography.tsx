import { FC, memo } from 'react';
import * as styled from './typography.styles';
import { TypographyProps } from './typography.types';

const Typography: FC<TypographyProps> = ({ children, style, className, ...props }) => {
  return (
    <styled.Typography style={style} className={`typography ${className}`} {...props}>
      {children}
    </styled.Typography>
  );
};

export default memo(Typography);
