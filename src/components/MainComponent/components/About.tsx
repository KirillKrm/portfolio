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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lectus
        elit. Praesent tempus urna in consequat ullamcorper. Nullam elementum
        consequat scelerisque. Integer rutrum dolor et mi commodo tempor. Nam eu
        commodo enim. Nam at dui porttitor leo pulvinar commodo vel eu ex.
        Vestibulum dui tellus, suscipit non felis quis, posuere convallis purus.
        Sed vel laoreet ante, sit amet faucibus neque. Nullam convallis justo
        sit amet ex lacinia pellentesque. Phasellus posuere massa non pulvinar
        facilisis. In aliquam laoreet quam sit amet fermentum. Mauris hendrerit
        mi justo, vel vulputate metus gravida ut. Integer mi est, mattis sed
        sodales quis, molestie vel augue. Sed interdum semper lobortis. Aenean
        tincidunt metus eget sollicitudin tincidunt. Fusce sagittis tincidunt
        mauris, nec suscipit diam condimentum sit amet. Duis euismod congue
        nisi, eget pulvinar purus ultricies non. Nunc tempus aliquam enim ut
        blandit. Suspendisse ac justo non diam vestibulum tempor vitae eget
        sapien. Suspendisse ac leo nisl. Nulla sed libero vel augue convallis
        lobortis at sit amet augue. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Sed fermentum in orci quis facilisis. Donec ante ipsum, placerat nec
        tempus vel, sodales nec purus.
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
    flex
    flex-wrap
    justify-center
    gap-4
  `,
  grid__cell: `
    flex
    flex-row
    w-96
    justify-center
    items-center
    p-2
    gap-2
    rounded-xl
    bg-primary
  `,
}
