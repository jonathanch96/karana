import Image from 'next/image'
import ImageContainer from './ImageContainer'
import styles from './ThreeDModelling.module.css'
import data from '../../data/3d-modelling.json'
const ThreeDModelling = () => {
  return (
    <div className={styles['container-background']}>
      <Image
        className={styles['image-background']}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029165/Icon/background_mfgw23.png"
      />
      <div className={styles['container']}>
        {data.map((d) => (
          <ImageContainer key={d.title} title={d.title} images={d.images} />
        ))}
      </div>
    </div>
  )
}

export default ThreeDModelling
