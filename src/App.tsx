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
    min-h-screen
    items-center
    p-4
    gap-4
    bg-primary
    bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
    text-quaternary

    sm:flex-row
    sm:justify-center
    sm:items-start
    sm:p-8
    sm:gap-8
  `,
}

export default App
