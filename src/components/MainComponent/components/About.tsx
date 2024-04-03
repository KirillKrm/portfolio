import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import AdsClickIcon from '@mui/icons-material/AdsClick'
import WebIcon from '@mui/icons-material/Web'

export default function About() {
  return (
    <div className={styles.container}>
      <p>
        Welcome to the portfolio of <b>Kyrylo Karmazin</b>, a <b>passionate </b>
        frontend developer dedicated to crafting immersive digital experiences,
        residing in Kyiv, Ukraine. With a <b>blend of creativity</b>,
        <b> technical expertise</b>, and a <b>keen eye for detail</b>, I
        transform ideas into captivating user interfaces.
      </p>
      <p>
        I graduated from <b>National Aviation University</b> (State University
        "Kyiv Aviation Institute")in 2024 with a master's degree in Computer
        Engineering, and I've been actively working in the field ever since.
      </p>
      <p>
        I have various hobbies and passions that keep me occupied. Whether it's
        reading or playing musical instruments, I constantly pursue new
        experiences and enjoy staying engaged in continuous learning.
      </p>
      <p>
        I firmly believe in <b>continuous growth</b>, which is why I strive to
        expand my horizons constantly. Technology is my passion, and I'm driven
        by the urge to constantly push the boundaries of what's achievable. I
        eagerly anticipate the trajectory of my career and remain receptive to
        new opportunities. 🙂
      </p>
      <div className={styles.container__heading}>What I do</div>
      <div className={styles.container__grid}>
        <div className={styles.grid__cell}>
          <DesktopWindowsOutlinedIcon fontSize="large" />
          <div className={styles.cell__text}>
            <span className={styles.text__title}>User Interface Design</span>
            <span>
              Crafting pixel-perfect designs that not only look stunning but
              also enhance user experience.
            </span>
          </div>
        </div>
        <div className={styles.grid__cell}>
          <DevicesIcon fontSize="large" />
          <div className={styles.cell__text}>
            <span className={styles.text__title}>
              Responsive Web Development
            </span>
            <span>
              Ensuring seamless experiences across all devices, from desktops to
              smartphones.
            </span>
          </div>
        </div>
        <div className={styles.grid__cell}>
          <AdsClickIcon fontSize="large" />
          <div className={styles.cell__text}>
            <span className={styles.text__title}>Interactive Experiences</span>
            <span>
              Bringing websites to life with engaging animations, transitions,
              and user interactions.
            </span>
          </div>
        </div>
        <div className={styles.grid__cell}>
          <WebIcon fontSize="large" />
          <div className={styles.cell__text}>
            <span className={styles.text__title}>
              Cross-Browser Compatibility
            </span>
            <span>
              Ensuring consistency and functionality across various browsers and
              platforms.
            </span>
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
    w-full
    p-6
    gap-4
    text-lg
  `,
  container__heading: `
    font-bold
    text-2xl
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
    w-full
    justify-center
    items-center
    p-3
    gap-3
    rounded-xl
    bg-primary

    sm:w-96
  `,
  cell__text: `
    flex
    flex-col
    gap-2
  `,
  text__title: `
    font-bold
    text-xl
  `,
}
