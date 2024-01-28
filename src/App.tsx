import React from 'react'
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Router } from './Router'
import { defaultTheme, modeTheme } from './styles/themes';
import { GlobalStyle } from './styles/global';
import { SearchProvider } from './contexts/SearchContext';
import { ConfigProjectProvider, useConfigProject } from './hooks/useProjectApp';

function App() {
  const queryClient = new QueryClient();
  const { themeLayout } = useConfigProject();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={modeTheme[themeLayout]}>
        {/* Usign HashRouter to deploy and using routes in githubpages */}
        <HashRouter>
          <SearchProvider>
            <Router />
          </SearchProvider>
        </HashRouter>
        <GlobalStyle />
      </ThemeProvider >
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

const ProjectAppProvider = () => {
  return (
    <ConfigProjectProvider>
      <App />
    </ConfigProjectProvider>
  )
}

export default ProjectAppProvider
