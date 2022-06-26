import styled from 'styled-components';

export const Intro = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.coresExtras.branco};
  font-size: 4vw;
  background-image: url('/assets/images/quarto.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 576px) {
    background-image: url('/assets/images/quartoMobile.jpg');
  }
`;

export const Titulo = styled.div`
  text-align: center;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    font-size: 35px;
  }

  .primaria {
    color: ${({ theme }) => theme.coresExtras.azul};
    font-weight: bold;
  }
`;

export const Descricao = styled.div`
  width: 70%;
  padding: 8px 32px;
  text-align: center;
  font-weight: 300;
  font-size: 2vw;

  @media (max-width: 576px) {
    font-size: 4vw;
  }
`;

export const DivArrow = styled.div`
  position: absolute;
  bottom: 5%;
`;

export const SaibaMais = styled.div`
  color: ${({ theme }) => theme.coresExtras.branco};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
  border-radius: 100%;

  @media (max-width: 576px) {
    cursor: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.coresExtras.preto}80;
  }
`;
