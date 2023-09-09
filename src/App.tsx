import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalStyles } from './styles/global'
import viteLogo from '/vite.svg'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'

function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
      <Intro />
      <CoffeeList />
    </ThemeProvider>
  )
}

export default App
