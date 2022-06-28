import { createTheme } from '@mui/material';
import { brancoQD, cinzaEscuro } from './cores';

export const lightTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          transition: '0.2s ease-in-out',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          transition: '0.2s ease-in-out',
        },
      },
    },
    MuiTableRow: {},
  },
});

export const darkTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: brancoQD,
          backgroundColor: 'transparent',
          borderBottom: `1px solid ${cinzaEscuro}`,
          transition: '0.2s ease-in-out',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          transition: '0.2s ease-in-out',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: brancoQD,
          backgroundColor: 'transparent',
          border: '1px solid black',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: brancoQD,
          backgroundColor: 'transparent',
          '> fieldset': {
            border: `1px solid ${brancoQD}90`,
          },
          ':hover': {
            '> fieldset': {
              border: `1px solid ${brancoQD} !important`,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: `${brancoQD}90`,
        },
      },
    },
  },
});
