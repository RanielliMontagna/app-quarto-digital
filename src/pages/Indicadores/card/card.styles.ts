import styled from 'styled-components';
import { azulQD } from 'themes';

export const ContainerBase = styled.div`
  position: relative;
  flex: 1;

  min-height: 68px;

  padding: 16px;
  border-radius: 8px;
  margin-top: 10px;

  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme?.cores?.terciaria};
`;

export const DivAbsoluta = styled.div<{ background?: string }>`
  //TODO: lógica cor
  background-color: ${({ background }) => background || azulQD};
  color: white;

  position: absolute;
  top: -10px;
  left: 16px;

  width: 50px;
  height: 50px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

