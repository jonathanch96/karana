import Image from 'next/image'
import styles from './HomeContent.module.css'

const HomeContent = ({ type = 'left', data }) => {
  return (
    <div className={styles['container']}>
      {type == 'left' && (
        <>
          <div className={styles['content-left']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={data.main_images}
              className={styles['images']}
            />
          </div>
          <div className={styles['content-right']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={data.additional_images[0]}
              className={styles['images-2']}
            />
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={data.additional_images[1]}
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
              src={data.additional_images[0]}
              className={styles['images-2']}
            />
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={data.additional_images[1]}
              className={styles['images-2']}
            />
          </div>
          <div className={styles['content-left']}>
            <Image
              width={940}
              height={1080}
              alt="Content"
              src={data.main_images}
              className={styles['images']}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HomeContent
