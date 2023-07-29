import Image from 'next/image'
import styles from './Popup.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Popup.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { useEffect, useRef } from 'react'

const Popup = ({ images, index, isOpen, closeModal }) => {
  const swiperRef = useRef(null)
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }, [index])
  return (
    isOpen && (
      <div className={styles['container']}>
        <Image
          width={20}
          height={20}
          alt="close"
          onClick={closeModal}
          src={'images/close.svg'}
          className={styles['close-icon']}
        />
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
          {images.map((image, index) => (
            <SwiperSlide key={'image-popup' + index}>
              <Image
                src={image}
                width={940}
                height={626}
                className={styles['image']}
                alt="3d Model"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  )
}

export default Popup
