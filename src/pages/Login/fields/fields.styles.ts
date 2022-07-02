import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${(props) => `${props.theme.tamanhoFonte.sm}`};
  color: ${({ theme }) => theme.coresExtras.preto};
  width: calc(100% - 20px);
  margin: 8px 0px 32px 0px;
  padding: 15px 10px;
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.coresExtras.cinzaEscuro};
`;
