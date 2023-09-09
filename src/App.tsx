import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalStyles } from './styles/global'
import viteLogo from '/vite.svg'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import { Header } from './components/Header'
import { Intro } from './components/Intro'

function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
      <Intro />
    </ThemeProvider>
  )
}

export default App
