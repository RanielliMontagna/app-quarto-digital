import { FC, memo } from 'react';

import type { IPaperDataTable } from './paperDataTable.types';
import { Container } from './paperDataTable.styles';

const PaperDataTable: FC<IPaperDataTable> = ({ children, height }) => {
  return <Container height={height}>{children}</Container>;
};

export default memo(PaperDataTable);

