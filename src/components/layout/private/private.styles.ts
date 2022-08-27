import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { fundoBranco, fundoPreto } from 'themes';

export const DivChildren = styled.div<{ tema: string | null }>`
  width: 100%;
  color: ${({ theme }) => theme.cores.secundaria};
  background-color: ${({ tema }) => (tema !== 'escuro' ? fundoBranco : fundoPreto)};
  transition: 0.3s ease-in-out;
`;

export const DivDrawer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const DivDrawerMobile = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;

export const DivTema = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px 0px 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.cores.secundaria};

  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.cores.primaria}25;
  }

  @media (max-width: 576px) {
    padding: 0px 16px;
  }
`;

export const DivMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: 100%;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.cores.primaria}25;
  }
`;

export const styledAvatar = styled(Avatar)`
  width: 35px !important;
  height: 35px !important;
  color: ${({ theme }) => theme.coresExtras.branco} !important;
  background-color: ${({ theme }) => theme.cores.primaria} !important;
`;

export const TituloPerfil = styled.p`
  font-weight: 300;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;

  @media (max-width: 576px) {
    display: none;
  }
`;

