import Image from 'next/image'
import styles from './FloatingBackground.module.css'

const FloatingBackground = ({ src, customStyle }) => {
  return (
    <Image
      style={customStyle}
      src={`${src}`}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      objectPosition="top center"
      priority
      className={styles['image-background']}
    />
  )
}

export default FloatingBackground
