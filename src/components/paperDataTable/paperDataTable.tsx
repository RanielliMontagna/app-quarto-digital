import { FC, memo, PropsWithChildren, ReactNode } from 'react';
import { Container } from './paperDataTable.styles';

const PaperDataTable: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(PaperDataTable);

