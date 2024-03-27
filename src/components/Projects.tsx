import React from 'react'

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        <div className={styles.grid__cell}>
          <img
            className={styles.cell__image}
            alt="Video-conferencing"
            src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/video-conferencing-software.jpg"
          />
          <span className={styles.cell__name}>Video-conferencing</span>
        </div>
        <div className={styles.grid__cell}>
          <img
            className={styles.cell__image}
            alt="Twitter Clone"
            src="https://www.lifewire.com/thmb/2BFcuvX0tJGDv1FXNWf_jn1_xGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Capture-a93cb7b76f4b4f89b9449b6b368ab8e9.JPG"
          />
          <span className={styles.cell__name}>Twitter Clone</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    p-6
  `,
  container__grid: `
    grid
    grid-cols-3
    gap-4
  `,
  grid__cell: `
    rounded-xl
    bg-primary
    overflow-hidden
  `,
  cell__image: `
    w-full
    h-5/6
    object-cover
  `,
  cell__name: `
    p-2
  `,
}
