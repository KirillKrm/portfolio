import React from 'react'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

interface Contact {
  name: string
  url: string
  icon: React.ReactElement
}

const contactList: Contact[] = [
  {
    name: 'Email',
    url: 'mailto:kirillkarmazin2301@gmail.com',
    icon: <EmailOutlinedIcon fontSize="large" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/KirillKrm',
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kyrylo-karmazin/',
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100007744062507',
    icon: <FacebookIcon fontSize="large" />,
  },
]

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__profile}>
        <div className={styles.profile__portret}>
          <img src="portfolio/portret.jpg" alt="portret" />
        </div>
        <div className={styles.profile__name}>Kyrylo Karmazin</div>
        <div className={styles.profile__position}>Front-End Developer</div>
      </div>
      <div className={styles.container__divider} />
      <div className={styles.container__contacts}>
        {contactList.map((contact) => {
          return (
            <a
              key={contact.name}
              className={styles.contacts__contact}
              href={contact.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className={styles.contact__icon}>{contact.icon}</div>
              <div className={styles.contact__text}>
                <span className="font-bold">{contact.name}</span>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex
    static
    h-[400px]
    p-6
    items-center
    bg-secondary
    rounded-2xl

    sm:sticky
    sm:top-8
    sm:w-64
    sm:h-min
    sm:flex-col
    sm:mx-0
    sm:p-0
    sm:py-6
  `,
  container__profile: `
    flex
    flex-col
    w-full
    h-full
    items-center
  `,
  profile__portret: `
    w-full
    max-w-40
    h-auto
    mx-4
    rounded-3xl
    overflow-hidden
    select-none
  `,
  profile__name: `
    mt-4
    font-bold
    text-2xl
    text-center
  `,
  profile__position: `
    mt-2
    px-2
    py-0.5
    bg-tertiary
    rounded-md
    text-sm
    text-center
  `,
  container__divider: `
    flex
    w-px
    h-full
    mx-3
    bg-tertiary

    sm:w-5/6
    sm:h-px
    sm:my-6
  `,
  container__contacts: `
    flex
    flex-col
    w-full
    gap-4
    select-none

    sm:w-5/6
  `,
  contacts__contact: `
    flex
    justify-left
    items-center
    gap-2
    rounded-2xl
    ease-in-out
    duration-300
    hover:bg-black/10
    hover:scale-110
  `,
  contact__icon: `
    flex
    w-12
    h-12
    justify-center
    items-center
    rounded-xl
    drop-shadow-[-2px_2px_4px_black]
  `,
  contact__text: `
    flex
    flex-col
    truncate
    text-lg
  `,
}
