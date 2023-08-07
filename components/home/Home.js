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
import contact from '../../data/contact.json'

const Home = () => {
  return (
    <div className={styles['container-background']}>
      <Image
        className={styles['image-background']}
        alt="Background Image"
        width={1440}
        height={7681}
        src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029165/Icon/background_home_wyqd84.png"
      />
      <div className={`Home ${styles['container']}`}>
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
            <SwiperSlide key={'banner' + slide}>
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

        <div
          className={styles['content-container']}
          style={{ maxWidth: '90%' }}
        >
          Karana Bureau is an architectural, building construction, and interior
          Design Studio. The establishment's goals is to offer work services in
          the fields of construction and building design as well as the interior
          that is designated to support the construction of homes, businesses,
          and offices. These services include building consultants and interior
          and exterior buildings as well as mechanical, electrical, and
          electronic systems."
        </div>
        <HomeContent type="right" data={data[1]} />
        <div className={styles['content-container']}>
          <div className={styles['content-1']}>
            People in their daily lives wish to achieve happiness that will be
            an ideal for everyone.
          </div>
          <div className={styles['content-2']}>
            The presence of Karana will be helpful to those who seek happiness
            in all directions and in every corner. It is also important to
            provide them with a safe space, good function and comfort through
            spatial design solutions.
          </div>
        </div>
        <HomeContent type="left" data={data[2]} />
        <div className={styles['content-container']}>
          <div className={styles['content-2']}>
            Kebahagiaan di Setiap Sudut Ruang
          </div>
        </div>
        <HomeContent type="right" data={data[3]} />

        <div className={styles['content-container']}>
          <div className={styles['instagram']}>
            follow{' '}
            <a
              className={styles['instagram-link']}
              href={contact.instagram_link}
              target="_blank"
            >
              {contact.instagram_text}
            </a>
          </div>
        </div>
        <InstagramContainer />
      </div>
    </div>
  )
}

export default Home
