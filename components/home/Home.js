import Image from 'next/image'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['image-container']}`}>
        <Image
          className={`${styles['banner-1']}`}
          src="/images/home/banner_1.png"
          alt="Logo"
          width={1440}
          height={623}
        />
      </div>
    </div>
  )
}

export default Home
