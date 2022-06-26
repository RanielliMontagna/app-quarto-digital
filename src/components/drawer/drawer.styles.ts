import styled from 'styled-components';

//Div Menu
export const DivMenu = styled.div`
  height: 100%;
  width: 70px;
  color: ${({ theme }) => theme.coresExtras.branco};
`;

//Div Logo
export const DivLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.cores.primaria};
`;

//Div Botões
export const DivBotoes = styled.div`
  box-shadow: inset 0 10px 9px -7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.cores.primaria};
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 76px);
  padding: 8px 0px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const BotaoDrawer = styled.button`
  padding: 10px 0px;
  margin: 4px 0px;
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.coresExtras.branco};
  &:hover {
    background-color: ${({ theme }) => theme.coresExtras.preto}80;
    transition: 0.5s;
  }
`;

//Div Rodapé
export const DivRodape = styled.div`
  cursor: pointer;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.cores.primaria};
`;

export const BotaoSair = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.coresExtras.preto}80;
    transition: 0.4s;
  }
`;
