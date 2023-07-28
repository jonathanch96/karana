import Image from 'next/image'
import ImageContainer from './ImageContainer'
import styles from './ThreeDModelling.module.css'

const ThreeDModelling = () => {
  return (
    <div className={styles['container-background']}>
      <Image
        className={styles['image-background']}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        src="/images/background.png"
      />
      <div className={styles['container']}>
        <ImageContainer
          title="Bening's Clinic Cibubur"
          images={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
          ]}
          detailImages={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
          ]}
        />
        <ImageContainer
          title="Bening's Clinic Cibubur"
          images={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
          ]}
          detailImages={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
          ]}
        />
        <ImageContainer
          title="Bening's Clinic Cibubur"
          images={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1.png",
          ]}
          detailImages={[
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
            "/images/3d-modelling/Bening's Clinic Cibubur/1_detail.png",
          ]}
        />
      </div>
    </div>
  )
}

export default ThreeDModelling
