import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import theme from './theme';
import { GlobalStyle } from './GlobalStyle';
import './locales/i18n';
import LanguageFlags from 'locales/LanguageFlags';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter basename="/fs44-react-team-proj">


          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LanguageFlags />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

