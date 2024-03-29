import React from 'react'
import classNames from 'classnames'

import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Main() {
  const [activeComponent, setActiveComponent] = React.useState('About')

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName)
  }

  const buttonNames = ['About', 'Projects', 'Skills']

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        {buttonNames.map((name) => {
          return (
            <button
              key={name}
              className={
                styles.header__button +
                classNames({ 'font-bold': activeComponent === name })
              }
              onClick={() => handleButtonClick(name)}
            >
              {name}
            </button>
          )
        })}
      </div>
      {activeComponent === 'About' && <About />}
      {activeComponent === 'Projects' && <Projects />}
      {activeComponent === 'Skills' && <Skills />}
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    h-min
    bg-secondary
    rounded-2xl

    sm:w-4/6
    sm:mx-0
  `,
  container__header: `
    flex
    flex-row
    h-12
    justify-center
    bg-tertiary
    rounded-t-2xl
  `,
  header__button: `
    flex
    h-full
    px-4
    justify-center
    items-center
    hover:bg-[rgba(0,0,0,0.1)]
    text-xl
  `,
}
