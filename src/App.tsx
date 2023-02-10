import React from 'react'
import { ThemeProvider } from "styled-components";

import { Home } from './pages/Home'
import { GlobalStyle } from './global';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
