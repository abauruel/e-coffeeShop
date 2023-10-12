import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalStyles } from './styles/global'
import viteLogo from '/vite.svg'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/Context'

function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <ContextProvider>

        <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App
