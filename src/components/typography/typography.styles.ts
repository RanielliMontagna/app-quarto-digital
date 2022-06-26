import { getColor } from 'shared';
import styled, { css } from 'styled-components';
import { TypographyProps } from './typography.types';

const getSize = ({ size }: Pick<TypographyProps, 'size'>) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.xs};
      `;
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.sm};
      `;
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.md};
      `;
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.lg};
      `;
    case 'xl':
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.xl};
      `;
    default:
      return css`
        font-size: ${({ theme }) => theme.tamanhoFonte.md};
      `;
  }
};

const getWeight = ({ weight }: Pick<TypographyProps, 'weight'>) => {
  switch (weight) {
    case 'slim':
      return css`
        font-weight: 300;
      `;
    case 'normal':
      return css`
        font-weight: normal;
      `;
    case 'bold':
      return css`
        font-weight: 600;
      `;
  }
};

export const Typography = styled.span<TypographyProps>`
  ${({ weight }) => getWeight({ weight })};
  ${({ size }) => getSize({ size })};
  color: ${({ color }) => getColor({ color })};
`;
