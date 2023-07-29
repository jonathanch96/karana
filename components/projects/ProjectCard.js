import { useState } from 'react'
import styles from './ProjectCard.module.css'
import ProjectQuickViewPortal from './ProjectQuickViewPortal'
const ProjectCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dynamicImageUrl = encodeURIComponent(data.images.preview)

  const openModal = (index) => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div
        onClick={openModal}
        className={`${styles['container']} col-lg-3 col-md-4 col-sm-6 col-12`}
        style={{
          backgroundImage: `url(${dynamicImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={styles['header']}>Quick View</div>
        <div className={styles['footer']}>{data.title}</div>
      </div>
      <ProjectQuickViewPortal
        data={data}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  )
}
export default ProjectCard
