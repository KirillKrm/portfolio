import React from 'react'

import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import AdsClickIcon from '@mui/icons-material/AdsClick'
import WebIcon from '@mui/icons-material/Web'

export default function About() {
  return (
    <div className={styles.container}>
      <p>
        Welcome to the portfolio of Kyrylo Karmazin, a passionate frontend
        developer dedicated to crafting immersive digital experiences. With a
        blend of creativity, technical expertise, and a keen eye for detail, I
        transform ideas into captivating user interfaces that resonate with
        audiences.
      </p>
      <div className="font-bold text-xl">What I do</div>
      <div className={styles.container__grid}>
        <div className={styles.grid__cell}>
          <DesktopWindowsOutlinedIcon fontSize="large" />
          <span>
            User Interface Design: Crafting pixel-perfect designs that not only
            look stunning but also enhance user experience.
          </span>
        </div>
        <div className={styles.grid__cell}>
          <DevicesIcon fontSize="large" />
          <span>
            Responsive Web Development: Ensuring seamless experiences across all
            devices, from desktops to smartphones.
          </span>
        </div>
        <div className={styles.grid__cell}>
          <AdsClickIcon fontSize="large" />
          <span>
            Interactive Experiences: Bringing websites to life with engaging
            animations, transitions, and user interactions.
          </span>
        </div>
        <div className={styles.grid__cell}>
          <WebIcon fontSize="large" />
          <span>
            Cross-Browser Compatibility: Ensuring consistency and functionality
            across various browsers and platforms.
          </span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    w-full
    p-6
    gap-4
    text-lg
  `,
  container__grid: `
    grid
    grid-cols-3
    gap-4
  `,
  grid__cell: `
    flex
    flex-row
    justify-center
    items-center
    p-2
    gap-2
    rounded-xl
    bg-primary
  `,
}
