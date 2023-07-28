import Image from 'next/image'
import styles from './InstagramContainer.module.css'
import data from '../../../data/instagram.json'

const InstagramContainer = () => {
  return (
    <div className={styles['container']}>
      {data.map((instagram) => (
        <a href={instagram.link}>
          <Image
            width={340}
            height={340}
            alt="Instagram Images"
            src={instagram.images}
          />
        </a>
      ))}
    </div>
  )
}

export default InstagramContainer
