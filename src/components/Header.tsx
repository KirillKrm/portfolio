import React from 'react'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__portret}>
        <img src="portfolio/portret.jpg" alt="portret" />
      </div>
      <div className={styles.container__name}>Kyrylo Karmazin</div>
      <div className={styles.container__position}>Front-End Developer</div>
      <hr className={styles.container__divider} />
      <div className={styles.container__contacts}>
        <div className={styles.container__contact}>
          <a
            className={styles.contact__icon}
            href="mailto:kirillkarmazin2301@gmail.com"
          >
            <EmailOutlinedIcon fontSize="large" />
          </a>
          <div className={styles.contact__text}>
            <span className="font-bold">Email</span>
          </div>
        </div>
        <div className={styles.container__contact}>
          <a
            className={styles.contact__icon}
            href="https://github.com/KirillKrm"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <div className={styles.contact__text}>
            <span className="font-bold">GitHub</span>
          </div>
        </div>
        <div className={styles.container__contact}>
          <a
            className={styles.contact__icon}
            href="https://www.linkedin.com/in/kyrylo-karmazin-37505718a/"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <div className={styles.contact__text}>
            <span className="font-bold">LinkedIn</span>
          </div>
        </div>
        <div className={styles.container__contact}>
          <a
            className={styles.contact__icon}
            href="https://www.facebook.com/profile.php?id=100007744062507"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <div className={styles.contact__text}>
            <span className="font-bold">Facebook</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    w-1/6
    h-full
    py-6
    min-w-min
    items-center
    bg-secondary
    rounded-2xl
  `,
  container__portret: `
    w-[200px]
    min-h-[200px]
    mx-4
    rounded-3xl
    overflow-hidden
  `,
  container__name: `
    mt-4
    font-bold
    text-xl
  `,
  container__position: `
    mt-2
    px-2
    py-0.5
    bg-tertiary
    rounded-md
    text-sm
  `,
  container__divider: `
    my-6
    w-5/6
    border-1
    border-tertiary
  `,
  container__contacts: `
    flex
    flex-col
    gap-4
    w-5/6
  `,
  container__contact: `
    flex
    justify-left
    items-center
    gap-2
  `,
  contact__icon: `
    flex
    w-12
    h-12
    justify-center
    items-center
    rounded-xl
    shadow-[0_3px_10px_rgb(0,0,0,0.4)]
  `,
  contact__text: `
    flex
    flex-col
    truncate
  `,
}
