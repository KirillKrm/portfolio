import React from 'react'

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <button className={styles.header__button}>About</button>
        <button className={styles.header__button}>Projects</button>
        <button className={styles.header__button}>Skills</button>
      </div>
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
  `,
  header__button: `
    flex
    h-full
    px-4
    justify-center
    items-center
    hover:bg-[rgba(0,0,0,0.1)]
  `,
}
