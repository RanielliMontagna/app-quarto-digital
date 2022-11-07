import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import type { IQuarto } from 'store/quartos';
import styled from 'styled-components';

export const ContainerCard = styled.div<{ status: IQuarto['status'] }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.coresExtras.cinzaClaro};
  background-color: ${({ theme }) => theme?.cores?.terciaria};

  transition: all 0.2s ease-in-out;

  margin: 8px;
  border-radius: 8px;

  height: 110px;
  width: calc(20% - 19px);

  &:hover {
    transform: ${({ status }) => (status !== 0 ? 'scale(1.02)' : 'none')};
    cursor: ${({ status }) => (status !== 0 ? 'pointer' : 'default')};
  }

  @media (max-width: 1400px) {
    width: calc(25% - 19px);
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 19px);
  }

  @media (max-width: 900px) {
    width: calc(50% - 19px);
  }

  @media (max-width: 550px) {
    width: calc(100% - 19px);
  }
`;

export const CardHeader = styled.div<{ status: IQuarto['status'] }>`
  width: 50px;
  border-radius: 8px 0px 0px 8px;
  height: calc(100% - 16px);
  padding: 8px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 2px solid ${({ theme }) => theme.coresExtras.cinzaClaro};
  color: ${({ theme, status }) => {
    if (status === 1) {
      return theme.coresExtras.branco;
    } else {
      return theme.cores.secundaria;
    }
  }};
  background-color: ${({ theme, status }) => status !== 0 && theme?.cores?.primaria};
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
