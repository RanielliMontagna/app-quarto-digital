import styled from 'styled-components';

export const Container = styled.div<{ height?: string }>`
  display: flex;

  width: 100%;
  height: ${({ height }) => height || 'calc(100% - 40px)'};
  border-radius: 8px;
  padding: 8px 16px;

  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme?.cores?.terciaria};
`;

