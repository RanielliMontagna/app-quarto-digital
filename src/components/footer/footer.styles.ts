import styled from 'styled-components';

export const DivFooter = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.coresExtras.preto};
  color: ${({ theme }) => theme.coresExtras.cinzaClaro};

  .quarto {
    margin-right: 4px;
    font-weight: 700;
  }

  .digital {
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.coresExtras.cinzaClaro};
  }
`;

export const Copyright = styled.div`
  margin-bottom: 32px;
  display: flex;
  text-align: center;
  span {
    margin-left: 4px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    span {
      margin-left: 0px;
    }
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const RedeSocial = styled.div`
  font-size: 0.8em;
  font-weight: 800;
  margin: 4px 32px;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.coresExtras.branco};
    cursor: pointer;
  }
`;
