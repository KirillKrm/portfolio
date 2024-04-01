import React from 'react'
import classNames from 'classnames'

import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { motion } from 'framer-motion'

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
              className={styles.header__button}
              onClick={() => handleButtonClick(name)}
            >
              <span
                className={classNames({
                  'text-quaternary': activeComponent === name,
                })}
              >
                {name}
              </span>
              {name === activeComponent ? (
                <motion.div
                  className={styles.button__underline}
                  layoutId="underline"
                />
              ) : null}
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
    w-full
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
    rounded-t-2xl
  `,
  header__button: `
    flex
    relative
    h-full
    px-4
    justify-center
    items-center
    text-xl
    text-quaternary/60
    select-none

    hover:bg-black/10
    hover:text-quaternary
  `,
  button__underline: `
    absolute
    bottom-0
    w-full
    h-1
    bg-tertiary
    rounded-full
  `,
}
