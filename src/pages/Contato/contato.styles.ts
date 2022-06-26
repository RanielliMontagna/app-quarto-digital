import styled from 'styled-components';

export const DivConteudo = styled.div`
  padding-top: 60px;
  background-color: ${({ theme }) => theme.coresExtras.preto};
  color: ${({ theme }) => theme.coresExtras.branco};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  span {
    background-color: ${({ theme }) => theme.coresExtras.branco};
    color: ${({ theme }) => theme.coresExtras.preto};
    padding: 4px;
    border-radius: 8px;
  }

  p {
    padding: 0px 32px;
    width: 1000px;

    @media (max-width: 1000px) {
      width: calc(100% - 64px);
    }
  }
`;

export const DivGeral = styled.div`
  background-color: ${({ theme }) => theme.coresExtras.preto};
`;
