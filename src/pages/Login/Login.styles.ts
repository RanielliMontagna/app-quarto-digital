import { TextField } from '@mui/material';
import styled from 'styled-components';

//Login
export const DivLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.coresExtras.branco};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  > img {
    padding: 16px 0px 0px 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    overflow: auto;
  }

  @media (max-height: 600px) {
    justify-content: unset;
  }
`;

export const Field = styled(TextField)`
  width: 80%;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const Label = styled.p``;

export const DivCheckbox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const StayConnect = styled.div`
  display: flex;
  align-items: center;
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.coresExtras.cinzaClaro};
  font-weight: 100;
  font-size: ${(props) => `${props.theme.tamanhoFonte.sm}`};
  cursor: pointer;
`;

export const ButtonEnter = styled.button`
  margin: 16px 0px;
  padding: 10px 0px;
  width: 80%;
  height: 44px;
  background-color: ${({ theme }) => theme.cores.primaria};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.coresExtras.branco};
  font-size: ${(props) => `${props.theme.tamanhoFonte.md}`};
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  @media (min-width: 1500px) {
    width: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.cores.primaria}90;
  }
`;

//Layout
export const DivLayout = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.cores.primaria};

  @media (max-width: 950px) {
    display: none;
  }

  h1 {
    color: ${({ theme }) => theme.coresExtras.branco};
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 32px;

    @media (max-height: 350px) {
      margin-top: 0px;
    }
  }

  h2 {
    color: ${({ theme }) => theme.coresExtras.branco};
    font-weight: 300;
    text-align: center;
    padding: 0px 10px;
    font-size: 20px;
  }
`;

export const DivIlustracao = styled.div`
  > img {
    width: 50vh;
  }

  @media (max-height: 350px) {
    display: none;
  }
`;

export const VoltarHome = styled.div`
  padding-bottom: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.coresExtras.cinzaClaro};
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.coresExtras.cinzaEscuro};
  }
  @media (max-width: 576px) {
    cursor: none;
  }
`;
