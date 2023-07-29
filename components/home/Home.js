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

import banner from '../../data/banner.json'

import data from '../../data/home.json'

const Home = () => {
  return (
    <div className={styles['container-background']}>
      <Image
        className={styles['image-background']}
        alt="Background Image"
        width={1440}
        height={7681}
        src="/images/background_home.png"
      />
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
          {banner.map((slide) => (
            <SwiperSlide key={slide}>
              <Image
                className={styles['banner-image']}
                width={1440}
                height={623}
                alt="banner 1"
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <HomeContent type="left" data={data[0]} />

        <div className={styles['content-container']}>
          Karana adalah sebuah perusahaan dibidang Arstitektur, Konstruksi
          Bangunan dan Desain Interior. Maksud pendiriannya adalah untuk
          memberikan jasa-jasa pekerjaan dibidang Rancang Bangun Konstruksi
          serta interior yang diperuntukan untuk menunjang pembangunan Rumah
          tinggal, Fasilitas Komersial, dan Perkantoran, yang meliputi konsultan
          bangunan, bangunan interior, mechanical electrical, dan eksterior
          bangunan.
        </div>
        <HomeContent type="right" data={data[1]} />
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
        <HomeContent type="left" data={data[2]} />
        <div className={styles['content-container']}>
          <div className={styles['content-2']}>
            Karana will help them who seek there will be
            <br /> happiness in every corner and aspect within their <br />
            safe place by giving a spatial solution for them.
          </div>
        </div>
        <HomeContent type="right" data={data[3]} />

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
    </div>
  )
}

export default Home
