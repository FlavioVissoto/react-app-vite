import { ThemeProvider } from 'styled-components';

import { AppContainer, AppContent, AppWrapper } from './modules/styles/container';
import { GlobalStyle } from './modules/styles/global.style';
import { theme } from './modules/styles/theme';
import LoginViewer from './modules/viewes/login/login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppContent>
          <AppWrapper>
            <LoginViewer />
          </AppWrapper>
        </AppContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
