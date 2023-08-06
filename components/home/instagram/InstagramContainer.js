import Image from 'next/image'
import styles from './InstagramContainer.module.css'
import data from '../../../data/instagram.json'
import Link from 'next/link'

const InstagramContainer = () => {
  return (
    <div className={styles['container']}>
      {data.map((instagram, index) => (
        <Link
          key={'instagram' + index}
          target="_blank"
          className={styles['link']}
          href={instagram.link}
        >
          <Image
            className={styles['image']}
            width={340}
            height={340}
            alt="Instagram Images"
            src={instagram.images}
          />
        </Link>
      ))}
    </div>
  )
}

export default InstagramContainer
