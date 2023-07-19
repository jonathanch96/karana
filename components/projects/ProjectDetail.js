import Image from 'next/image'
import styles from './ProjectDetail.module.css'
import ProjectDetailImage from './ProjectDetailImage'
const ProjectDetail = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['project-description-container']}>
        <div className={styles['project-title-container']}>
          <div className={styles['label']}>Project</div>
          <div className={`${styles['title']} ${styles['project-title']}`}>
            Bening's Clinic
          </div>
        </div>
        <div className={styles['description-container']}>
          <div className={styles['title-container']}>
            <div className={styles['label']}>Location</div>
            <div className={styles['description']}>Cibubur, Indonesia</div>
          </div>
          <div className={styles['title-container']}>
            <div className={styles['label']}>Years</div>
            <div className={styles['description']}>2022</div>
          </div>
          <div className={styles['title-container']}>
            <div className={styles['label']}>Client</div>
            <div className={styles['description']}>Bening Clinic</div>
          </div>
          <div className={styles['title-container']}>
            <div className={styles['label']}>Team</div>
            <div className={styles['description']}>
              Datu Aria Kandhabuana, Iman Diman Gissa Nurhalisa
            </div>
          </div>
          <div className={styles['title-container']}>
            <div className={styles['label']}>Category</div>
            <div className={styles['description']}>
              Architecture, Interior Design, Commecrial, Beauty Clinc & Skincare
            </div>
          </div>
        </div>
      </div>
      <div className={styles['project-images-container']}>
        <ProjectDetailImage />
        <ProjectDetailImage />
      </div>
    </div>
  )
}

export default ProjectDetail
