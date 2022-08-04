import { Size } from 'shared';
import styled from 'styled-components';

// Backdrop

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 100;
  inset: 0;
`;

// Modal Geral

export const Modal = styled.div<{ size: Size; tema: string | null }>`
  max-height: 90vh;
  max-width: 90vw;

  width: ${({ size }) => (size === 'sm' ? '400px' : size === 'lg' ? '800px' : '600px')};

  overflow: auto;
  position: relative;
  inset: 0;
  border-radius: 8px;
  background-color: ${({ theme, tema }) => (tema === 'escuro' ? theme.coresExtras.pretoAppBar : theme.cores.terciaria)};
  color: ${({ theme }) => theme.cores.secundaria};
`;

// Cabeçalho

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

export const TituloModal = styled.div`
  padding-left: 4px;
  font-size: ${({ theme }) => theme.fontes.lg};
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DivBotaoFechar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: scale(1.3);
    color: ${({ theme }) => theme.cores.primaria};
  }
`;

// Conteudo

export const Conteudo = styled.div`
  padding: 24px 20px 16px 20px;
`;

// Footer

export const Footer = styled.div`
  padding: 12px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
`;

export const BotoesPrincipais = styled.div`
  display: flex;
`;

