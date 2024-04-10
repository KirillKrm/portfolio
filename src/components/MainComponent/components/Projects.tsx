interface Project {
  name: string
  description: string
  stack: string
  githubUrl: string
  imageUrl: string
}

const projectList: Project[] = [
  {
    name: 'Twitter Clone',
    description:
      'Twitter Clone is a web app that allows you to create and read user posts.',
    stack: 'React.js, Redux, TailwindCSS, Framer Motion, i18n',
    githubUrl: 'https://github.com/KirillKrm/twitter-clone',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/twitter_clone.jpg',
  },
  {
    name: 'Video Conferencing',
    description:
      'Video Conferencing is a web app that allows you to create or join video meetings.',
    stack: 'React.js, Socket.IO, WebRTC',
    githubUrl: 'https://github.com/KirillKrm/WebChat_frontend',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/video_conferencing.png',
  },
  {
    name: 'Music Player',
    description:
      'Music Player is a web app for listening to music directly in your browser and for its visualization.',
    stack: 'Angular, Angular Material, TailwindCSS',
    githubUrl: 'https://github.com/KirillKrm/music-player',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/music_player.png',
  },
]

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        {projectList.map((project) => {
          return (
            <div className={styles.grid__cell}>
              <a
                className={styles.cell__anchor}
                href={project.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                <img
                  className={styles.anchor__image}
                  alt={project.name}
                  src={project.imageUrl}
                />
              </a>
              <div className={styles.cell__text}>
                <span className={styles.text__name}>{project.name}</span>
                <span className={styles.text__description}>
                  {project.description}
                </span>
                <span className={styles.text__description}>
                  {project.stack}
                </span>
              </div>
            </div>
          )
        })}
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
