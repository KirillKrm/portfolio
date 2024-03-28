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
    url: 'https://www.linkedin.com/in/kyrylo-karmazin-37505718a/',
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
      <div className={styles.container__portret}>
        <img src="portfolio/portret.jpg" alt="portret" />
      </div>
      <div className={styles.container__name}>Kyrylo Karmazin</div>
      <div className={styles.container__position}>Front-End Developer</div>
      <hr className={styles.container__divider} />
      <div className={styles.container__contacts}>
        {contactList.map((contact) => {
          return (
            <a
              key={contact.name}
              className={styles.container__contact}
              href={contact.url}
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
    flex-col
    static
    w-min
    py-6
    items-center
    bg-secondary
    rounded-2xl

    sm:sticky
    sm:top-8
    sm:w-64
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
    text-2xl
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
    rounded-2xl
    ease-in-out
    duration-300
    hover:bg-[rgba(0,0,0,0.1)]
    hover:scale-110
  `,
  contact__icon: `
    flex
    w-12
    h-12
    justify-center
    items-center
    rounded-xl
    drop-shadow-[-2px_2px_4px_rgb(0,0,0)]
  `,
  contact__text: `
    flex
    flex-col
    truncate
    text-lg
  `,
}
