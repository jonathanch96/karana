import Image from 'next/image'
import styles from './HomeContent.module.css'

const HomeContent = ({ type = 'left' }) => {
  return (
    <div className={styles['container']}>
      {type == 'left' && (
        <>
          <div className={styles['content-left']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images']}
            />
          </div>
          <div className={styles['content-right']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images-2']}
            />
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images-2']}
            />
          </div>
        </>
      )}
      {type == 'right' && (
        <>
          <div className={styles['content-right']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images-2']}
            />
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images-2']}
            />
          </div>
          <div className={styles['content-left']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={'/images/home/home_1.png'}
              className={styles['images']}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HomeContent
