import Image from 'next/image'
import styles from './Home.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

import './Home.css'
import HomeContent from './HomeContent'
import InstagramContainer from './instagram/InstagramContainer'

const Home = () => {
  return (
    <div className={`${styles['container']}`}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            className={styles['banner-image']}
            width={1440}
            height={623}
            alt="banner 1"
            src={'/images/home/banner_1.png'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles['banner-image']}
            width={1440}
            height={623}
            alt="banner 2"
            src={'/images/home/banner_2.png'}
          />
        </SwiperSlide>
      </Swiper>
      <HomeContent type="left" />
      <div className={styles['content-container']}>
        Karana adalah sebuah perusahaan dibidang Arstitektur, Konstruksi
        Bangunan dan Desain Interior. Maksud pendiriannya adalah untuk
        memberikan jasa-jasa pekerjaan dibidang Rancang Bangun Konstruksi serta
        interior yang diperuntukan untuk menunjang pembangunan Rumah tinggal,
        Fasilitas Komersial, dan Perkantoran, yang meliputi konsultan bangunan,
        bangunan interior, mechanical electrical, dan eksterior bangunan.
      </div>
      <HomeContent type="right" />
      <div className={styles['content-container']}>
        <div className={styles['content-1']}>
          Dalam berkehidupan manusia,
          <br /> bahagia merupakan hal yang dituju oleh setiap individu.
        </div>
        <div className={styles['content-2']}>
          They hustlin, bustlin and fighting their life
          <br /> to achieve that ‘Happines’.
        </div>
      </div>
      <HomeContent type="left" />
      <div className={styles['content-container']}>
        <div className={styles['instagram']}>
          follow{' '}
          <a className={styles['instagram-link']} href="">
            @karana.buraeu
          </a>
        </div>
      </div>
      <InstagramContainer />
    </div>
  )
}

export default Home
