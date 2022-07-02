import { css } from 'styled-components';
import { Colors } from 'shared';

export const getColor = ({ color }: { color?: Colors }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.cores.primaria};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores.secundaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores.terciaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresUtilitarias.success};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresUtilitarias.warning};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresUtilitarias.danger};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresExtras.cinzaClaro};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresExtras.cinzaEscuro};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresExtras.pretoAppBar};
      `;
    default:
      return css``;
  }
};

export const getContrastColor = ({ color }: { color?: Colors }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores.terciaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores.secondaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresExtras.branco};
      `;
    default:
      return css`
        ${({ theme }) => theme.coresExtras.preto};
      `;
  }
};
