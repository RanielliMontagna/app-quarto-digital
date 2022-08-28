import styled from 'styled-components';

export const ContainerIndicadores = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  overflow: auto;
  padding: 0px 24px;
`;

export const ContainerGrafico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  border-radius: 8px;
  padding: 16px;

  height: 100%;
  min-height: 300px;
  margin-top: 16px;
  margin-bottom: 24px;

  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme?.cores?.terciaria};

  .tooltip {
    background-color: ${({ theme }) => theme?.cores?.terciaria} !important;
    border: 1px solid ${({ theme }) => theme?.coresExtras.cinzaClaro} !important;

    .apexcharts-tooltip-title {
      border: none !important;
      color: ${({ theme }) => theme?.coresExtras.secundaria} !important;
      background-color: ${({ theme }) => theme?.cores?.terciaria} !important;
    }
  }
`;

