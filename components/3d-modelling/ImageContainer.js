import Image from 'next/image'
import styles from './ImageContainer.module.css'
import { useState } from 'react'
import PopupPortal from './PopupPortal'

const ImageContainer = ({ title, images, detailImages }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openModal = (index) => {
    setIsOpen(true)
    setIndex(index)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <PopupPortal
        isOpen={isOpen}
        images={detailImages}
        index={index}
        closeModal={closeModal}
      />
      <div className={styles['container']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['image-container']}>
          {images.map((image, index) => (
            <Image
              key={'image_container' + index}
              onClick={() => {
                openModal(index)
              }}
              src={image}
              width={480}
              height={480}
              className={styles['image']}
              alt="3d Model"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageContainer
