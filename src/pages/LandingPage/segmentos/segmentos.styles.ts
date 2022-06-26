import styled from 'styled-components';

export const Segmentos = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.coresExtras.azul};
  color: ${({ theme }) => theme.coresExtras.branco};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 16px;
    text-align: center;
    font-weight: 300;
    font-size: 4vh;

    span {
      padding: 4px 8px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.coresExtras.preto};
    }
  }

  h2 {
    font-weight: 400;
  }
`;

export const DivCards = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
