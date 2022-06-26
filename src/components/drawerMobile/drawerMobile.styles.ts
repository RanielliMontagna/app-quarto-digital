import styled from 'styled-components';

export const DivDrawerMobile = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 5px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.cores.secundaria};
  border: 1px solid ${({ theme }) => theme.cores.secundaria};
  border-radius: 4px;

  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.cores.secundaria};
    color: ${({ theme }) => theme.cores.terciaria};
  }
`;
