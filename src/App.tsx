import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import { Router } from './Router'
import { defaultTheme } from './styles/themes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
