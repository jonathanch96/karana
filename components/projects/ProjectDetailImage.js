import Image from 'next/image'
import styles from './ProjectDetailImage.module.css'
const ProjectDetailImage = ({ mainImages, additionalImages = [] }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        {additionalImages.map((image, index) => (
          <Image
            key={'detaikImage' + index}
            className={styles['image']}
            width={440}
            height={434}
            src={image}
          />
        ))}
      </div>
      <div className={styles['image-container']}>
        <Image
          className={styles['image-full']}
          width={1338}
          height={878}
          src={mainImages}
        />
      </div>
    </div>
  )
}

export default ProjectDetailImage
