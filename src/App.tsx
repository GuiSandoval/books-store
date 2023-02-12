import React from 'react'
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Router } from './Router'
import { defaultTheme } from './styles/themes';
import { GlobalStyle } from './styles/global';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
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

export default App
