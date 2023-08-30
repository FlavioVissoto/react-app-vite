import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppContainer, AppContent, AppWrapper } from './modules/styles/container';
import { GlobalStyle } from './modules/styles/global.style';
import { theme } from './modules/styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppContent>
          <AppWrapper>
            <Outlet />
          </AppWrapper>
        </AppContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
