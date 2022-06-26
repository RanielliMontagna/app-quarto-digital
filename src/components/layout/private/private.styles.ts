import styled from 'styled-components';

export const DivChildren = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.cores.secundaria};
  background-color: ${({ theme }) => theme.cores.terciaria};
  transition: 0.3s ease-in-out;
`;

export const DivDrawer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const DivDrawerMobile = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;
