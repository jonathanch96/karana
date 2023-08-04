import { useState } from 'react'
import styles from './ProjectCard.module.css'
import ProjectQuickViewPortal from './ProjectQuickViewPortal'
import { useRouter } from 'next/router'
import Link from 'next/link'
const ProjectCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dynamicImageUrl = data.images.preview

  const openModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div
        className={`${styles['container']} col-lg-3 col-md-4 col-sm-6 col-12`}
        style={{
          backgroundImage: `url(${dynamicImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div onClick={openModal} className={styles['header']}>
          Quick View
        </div>
        <Link className={styles.link} href={data.link}>
          <div className={styles['footer']}>{data.title}</div>
        </Link>
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
