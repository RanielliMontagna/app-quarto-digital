import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  /* TODO: ajustar cor conforme status */
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.cores.primaria};
  background-color: ${({ theme }) => theme?.cores?.terciaria};

  transition: all 0.3s ease-in-out;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  width: calc(100% - 50px);
  gap: 4px;
  padding: 16px;
`;

export const TypographyWithEllipis = styled(Typography)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

