import ThemeProvider from '@rm-monorepo/theme-provider';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material';

import { useApp } from 'store';

import { azulQD, brancoQD, cinzaClaro, cinzaEscuro, danger, pretoAzulado, pretoQD, success, warning } from './cores';
import { fontes } from './fontes';
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
  fontes,
  cores: {
    primaria: azulQD,
    secundaria: pretoQD,
    terciaria: brancoQD,
  },
  coresUtilitarias: _coresUtilitarias,
  coresExtras: _coresExtras,
};

export const _temaEscuro = {
  fontes,
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
    <ThemeProviderMaterial theme={tema === 'escuro' ? darkTheme : lightTheme}>
      {/* @ts-ignore */}
      <ThemeProvider theme={tema === 'escuro' ? _temaEscuro : _temaClaro}>{children}</ThemeProvider>
    </ThemeProviderMaterial>
  );
};

