import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Qanelas Soft', sans-serif;
    user-select: none;
  }

  h1 {
    font-weight: 500;
    letter-spacing: 1px;
  }

  body, html {
    height: 100vh;
    background-color: ${({ theme }) => theme.cores.secundaria};
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;

    @media (max-width: 576px) {
      width: 5px;
      height: 5px;
    }
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.cores.terciaria}; 
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.coresExtras.cinzaEscuro}90;
    border-radius: 100px; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.coresExtras.cinzaEscuro}; 
  }
`;
