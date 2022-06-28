import { ThemeProvider } from '@mui/material';
import { useApp } from 'store';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { azulQD, brancoQD, cinzaClaro, cinzaEscuro, danger, pretoAzulado, pretoQD, success, warning } from './cores';
import { tamanhoFonte } from './fontes';
import { darkTheme, lightTheme } from './mui';

const _coresExtras = {
  cinzaClaro: cinzaClaro,
  cinzaEscuro: cinzaEscuro,
  pretoAppBar: pretoAzulado,
  branco: brancoQD,
  preto: pretoQD,
  azul: azulQD,
};

const _coresUtilitarias = {
  success: success,
  warning: warning,
  danger: danger,
};

export const _temaClaro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: pretoQD,
    terciaria: brancoQD,
  },
  coresUtilitarias: _coresUtilitarias,
  coresExtras: _coresExtras,
};

export const _temaEscuro = {
  tamanhoFonte,
  cores: {
    primaria: azulQD,
    secundaria: brancoQD,
    terciaria: pretoQD,
  },
  coresUtilitarias: _coresUtilitarias,
  coresExtras: _coresExtras,
};

export type ThemeType = typeof _temaClaro;

export const Theme: React.FC = ({ children }) => {
  const { tema } = useApp();

  return (
    <ThemeProvider theme={tema === 'escuro' ? darkTheme : lightTheme}>
      <ThemeProviderSC theme={tema === 'escuro' ? _temaEscuro : _temaClaro}>{children}</ThemeProviderSC>{' '}
    </ThemeProvider>
  );
};
