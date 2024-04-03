export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        <div className={styles.grid__cell}>
          <a
            className={styles.cell__anchor}
            href={'https://github.com/KirillKrm/WebChat_frontend'}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className={styles.anchor__image}
              alt="Video-conferencing"
              src="https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/video_conferencing.png"
            />
          </a>
          <div className={styles.cell__text}>
            <span className={styles.text__name}>Video conferencing</span>
            <span className={styles.text__description}>
              Video conferencing is a web app that allows you to create or join
              video meetings.
            </span>
            <span className={styles.text__description}>
              React.js, Socket.IO, WebRTC
            </span>
          </div>
        </div>
        <div className={styles.grid__cell}>
          <a
            className={styles.cell__anchor}
            href={'https://github.com/KirillKrm/twitter-clone'}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className={styles.anchor__image}
              alt="Twitter Clone"
              src="https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/twitter_clone.jpg"
            />
          </a>
          <div className={styles.cell__text}>
            <span className={styles.text__name}>Twitter Clone</span>
            <span className={styles.text__description}>
              Twitter Clone is a web app that allows you to create and read user
              posts.
            </span>
            <span className={styles.text__description}>
              React.js, Redux, TailwindCSS, Framer Motion, i18n
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    p-6
    select-none
  `,
  container__grid: `
    grid
    grid-cols-1
    gap-4

    sm:grid-cols-1
    md:grid-cols-2
  `,
  grid__cell: `
    flex
    flex-col
    rounded-xl
    bg-primary
    overflow-hidden
  `,
  cell__anchor: `
    h-5/6
  `,
  anchor__image: `
    h-full
    object-cover

    hover:opacity-90
  `,
  cell__text: `
    flex
    flex-col
    m-4
    gap-1
  `,
  text__name: `
    font-bold
    text-xl
  `,
  text__description: `
    text-quaternary/60
  `,
}
