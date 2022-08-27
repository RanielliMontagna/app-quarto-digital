import styled from 'styled-components';

export const ContainerListagem = styled.div`
  border-radius: 8px;
  padding: 16px;

  height: 100%;
  margin-top: 16px;
  margin-bottom: 24px;

  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme?.cores?.terciaria};
`;

