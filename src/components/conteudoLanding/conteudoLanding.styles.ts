import styled from 'styled-components';

export const DivConteudo = styled.div`
  color: ${({ theme }) => theme.coresExtras.branco};
  display: flex;
  width: 1000px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const DivTexto = styled.div`
  width: calc(50% - 128px);
  padding: 64px;

  p {
    font-weight: 200;
    text-align: justify;
    font-size: 1.2em;
  }

  @media (max-width: 1000px) {
    padding: 64px;
    width: calc(100% - 128px);
  }
`;

export const DivImagem = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Imagem = styled.img`
  width: 350px;

  @media (max-width: 1000px) {
    margin-top: 64px;
    width: 50vw;
  }
`;
