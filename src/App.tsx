import React from 'react'

import Header from './components/Header'
import Main from './components/Main'

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
    w-full
    h-full
    justify-center
    py-8
    gap-4
    bg-primary
    text-quaternary
  `,
}

export default App
