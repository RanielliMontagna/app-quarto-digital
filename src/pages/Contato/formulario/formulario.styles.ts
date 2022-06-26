import styled from 'styled-components';

export const DivFormulario = styled.div`
  width: 50%;
  height: calc(100vh - 177px);
`;

export const DivInterna = styled.div`
  border-radius: 32px;
  padding: 32px;
  width: calc(100% - 128px);
  height: calc(100% - 128px);
  margin: 32px;
  background-color: ${({ theme }) => theme.coresExtras.branco};
`;
