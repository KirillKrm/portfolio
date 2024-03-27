import React from 'react'
import classNames from 'classnames'

import About from './About'
import Projects from './Projects'
import Skills from './Skills'

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
    w-4/6
    h-full
    min-w-min
    bg-secondary
    rounded-2xl
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
