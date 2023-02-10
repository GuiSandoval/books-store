import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Router } from './Router'
import { defaultTheme } from './styles/themes';
import { GlobalStyle } from './styles/global';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider >
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
