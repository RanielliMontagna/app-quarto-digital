import styled from 'styled-components';

export const ContainerGrafico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  border-radius: 8px;
  padding: 16px;

  height: 100%;
  min-height: 300px;
  margin-top: 16px;
  margin-bottom: 24px;

  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme?.cores?.terciaria};
`;

