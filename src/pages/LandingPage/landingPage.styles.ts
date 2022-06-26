import styled from 'styled-components';

export const Geral = styled.div`
  overflow-y: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.coresExtras.preto};
  scroll-behavior: smooth;  


  &::-webkit-scrollbar {
    width: 10px;
    @media (max-width: 576px) {
      width: 5px;
    }
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.coresExtras.cinzaEscuro}30};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.coresExtras.cinzaEscuro}90;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.coresExtras.cinzaEscuro};
  }
`;

export const Intro = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.coresExtras.preto};
`;
