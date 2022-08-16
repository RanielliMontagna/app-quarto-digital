import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  /* TODO: ajustar cor conforme status */
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.cores.primaria};

  margin: 8px;
  border-radius: 8px;

  height: 110px;
  width: calc(20% - 16px);

  @media (max-width: 1400px) {
    width: calc(25% - 16px);
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 16px);
  }

  @media (max-width: 900px) {
    width: calc(50% - 16px);
  }

  @media (max-width: 550px) {
    width: calc(100% - 16px);
  }
`;

export const CardHeader = styled.div`
  width: 50px;
  border-radius: 8px 0px 0px 8px;
  height: calc(100% - 16px);
  padding: 8px 0px;

  display: flex;
  justify-content: center;

  color: white;
  background-color: ${({ theme }) => theme?.cores?.primaria};
`;

export const CardBody = styled.div`
  flex: 1;
`;

