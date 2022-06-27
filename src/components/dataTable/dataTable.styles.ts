import styled from 'styled-components';
import { TableRow } from '@mui/material';

export const TableRowStyled = styled(TableRow)`
  transition: 0.15s ease-in-out;

  &:hover {
    transition: 0.15s ease-in-out;
    background-color: ${({ theme }) => theme.cores.secundaria}10;
  }
`;
