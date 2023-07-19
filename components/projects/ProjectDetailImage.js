import Image from 'next/image'
import styles from './ProjectDetailImage.module.css'
const ProjectDetailImage = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <Image
          className={styles['image']}
          width={440}
          height={434}
          src={'/images/projects/project_detail_1.png'}
        />
        <Image
          className={styles['image']}
          width={440}
          height={434}
          src={'/images/projects/project_detail_1_1.png'}
        />
        <Image
          className={styles['image']}
          width={440}
          height={434}
          src={'/images/projects/project_detail_1_2.png'}
        />
      </div>
      <div className={styles['image-container']}>
        <Image
          className={styles['image-full']}
          width={1338}
          height={878}
          src={'/images/projects/project_detail_2.png'}
        />
      </div>
    </div>
  )
}

export default ProjectDetailImage
