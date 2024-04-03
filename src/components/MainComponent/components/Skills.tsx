interface Skill {
  name: string
  percent: string
}

const skillList: Skill[] = [
  {
    name: 'HTML',
    percent: '100%',
  },
  {
    name: 'CSS',
    percent: '100%',
  },
  {
    name: 'JavaScript',
    percent: '100%',
  },
  {
    name: 'TypeScript',
    percent: '100%',
  },
  {
    name: 'React.js',
    percent: '100%',
  },
  {
    name: 'Angular',
    percent: '60%',
  },
  {
    name: 'Vue.js',
    percent: '40%',
  },
  {
    name: 'Redux',
    percent: '80%',
  },
  {
    name: 'Tailwind CSS',
    percent: '100%',
  },
  {
    name: 'Framer Motion',
    percent: '100%',
  },
  {
    name: 'Socket.IO',
    percent: '100%',
  },
  {
    name: 'WebRTC',
    percent: '80%',
  },
  {
    name: 'Git',
    percent: '100%',
  },
]

export default function Skills() {
  return (
    <div className={styles.container}>
      {skillList.map((skill) => {
        return (
          <div className={styles.container__skill} key={skill.name}>
            <div className={styles.skill__text}>
              <span className={styles.text__name}>{skill.name}</span>
              <span className={styles.text__percent}>{skill.percent}</span>
            </div>
            <div className={styles.skill__bar}>
              <div
                className={styles.bar__progress}
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  container: `
    grid
    grid-cols-2
    p-6
    gap-4
    select-none
  `,
  container__skill: `
    flex
    flex-col
    gap-2
  `,
  skill__text: `
    flex
    gap-2
  `,
  text__name: `
    font-bold
  `,
  text__percent: `
    text-white/40
  `,
  skill__bar: `
    flex
    h-2
    bg-white/10
    rounded-full
  `,
  bar__progress: `
    bg-tertiary
    rounded-full
  `,
}
