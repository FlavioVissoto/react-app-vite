import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ToastProvider } from './contexts/toast/toast.provider';
import { AppContainer, AppContent, AppWrapper } from './modules/styles/container';
import { GlobalStyle } from './modules/styles/global.style';
import { theme } from './modules/styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        <AppContainer>
          <AppContent>
            <AppWrapper>
              <Outlet />
            </AppWrapper>
          </AppContent>
        </AppContainer>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
