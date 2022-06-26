import styled from 'styled-components';

export const DivCard = styled.div`
  background-color: ${({ theme }) => theme.coresExtras.branco};
  color: ${({ theme }) => theme.coresExtras.azul};
  border-radius: 16px;
  width: 300px;
  padding: 16px;
  margin: 16px 16px 16px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: 0.5s;

  @media (max-width: 1368px) {
    width: 250px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.coresExtras.preto}50;
    color: ${({ theme }) => theme.coresExtras.branco};
  }
`;
