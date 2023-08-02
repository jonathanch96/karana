import Image from 'next/image'
import styles from './ProjectDetail.module.css'
import ProjectDetailImage from './ProjectDetailImage'
import projects from '../../data/projects.json'
import { useRouter } from 'next/router'
import Error from 'next/error'
import PopupPortal from '../3d-modelling/PopupPortal'
import { useState } from 'react'
const ProjectDetail = () => {
  const router = useRouter()
  const { id } = router.query

  // Find the project data in the projects array
  const project = projects.find((project) => project.link === `/projects/${id}`)

  if (!project) {
    // Project not found, return a 404 page
    return <Error statusCode={404} />
  }

  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openModal = (index) => {
    setIsOpen(true)
    setIndex(index)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const detailImages = []
  project.images.project.forEach((detail) => {
    detailImages.push(...detail.additional_images)
    detailImages.push(detail.main_images)
  })

  return (
    <div className="container-background">
      <PopupPortal
        isOpen={isOpen}
        images={detailImages}
        index={index}
        closeModal={closeModal}
      />
      <Image
        className={styles['image-background']}
        width={1440}
        height={4064}
        src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029163/Icon/background_detail_gblxpy.png"
      />
      <div className={styles['container']}>
        <div className={styles['project-description-container']}>
          <div className={styles['project-title-container']}>
            <div className={styles['label']}>Project</div>
            <div className={`${styles['title']} ${styles['project-title']}`}>
              {project.project}
            </div>
          </div>
          <div className={styles['description-container']}>
            <div className={styles['title-container']}>
              <div className={styles['label']}>Location</div>
              <div className={styles['description']}>{project.location}</div>
            </div>
            <div className={styles['title-container']}>
              <div className={styles['label']}>Years</div>
              <div className={styles['description']}>{project.year}</div>
            </div>
            <div className={styles['title-container']}>
              <div className={styles['label']}>Client</div>
              <div className={styles['description']}>{project.client}</div>
            </div>
            <div className={styles['title-container']}>
              <div className={styles['label']}>Team</div>
              <div className={styles['description']}>{project.team}</div>
            </div>
            <div className={styles['title-container']}>
              <div className={styles['label']}>Category</div>
              <div className={styles['description']}>{project.category}</div>
            </div>
          </div>
        </div>
        <div className={styles['project-images-container']}>
          {project.images.project.map((detail, index) => (
            <ProjectDetailImage
              startIndex={index * 4}
              openModal={openModal}
              mainImages={detail.main_images}
              additionalImages={detail.additional_images}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
