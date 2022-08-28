import { Provider } from 'react-redux';
import { Router } from 'routes';

import { SnackbarProvider } from 'notistack';
import { GlobalStyles, Theme } from 'themes';

import { AuthProvider } from 'store/auth';
import { AppProvider, store } from 'store';

import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export const App = () => {
  // Configura o locale do dayjs
  dayjs.locale('pt-br');

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AppProvider>
          <AuthProvider>
            <Theme>
              <GlobalStyles />
              <Router />
            </Theme>
          </AuthProvider>
        </AppProvider>
      </SnackbarProvider>
    </Provider>
  );
};

