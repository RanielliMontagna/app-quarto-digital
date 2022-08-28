import styled from 'styled-components';

export const MapaContainer = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 56px);
  border-radius: 8px;
  padding: 16px;

  background-color: ${({ theme }) => theme.cores.terciaria};
`;

