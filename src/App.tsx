import React from 'react'

import Header from './components/Header'
import Main from './components/MainComponent/Main'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    h-full
    items-center
    py-8
    gap-8
    bg-primary
    bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
    text-quaternary

    sm:flex-row
    sm:justify-center
    sm:items-start
  `,
}

export default App
