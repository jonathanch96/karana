import styles from './ProjectQuickView.module.css'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './ProjectQuickView.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { useRef, useState } from 'react'
import Textfield from '../shared/Textfield'
import Link from 'next/link'

const ProjectQuickView = ({ data, isOpen, closeModal }) => {
  const swiperRef = useRef(null)
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  const handleMouseMove = (e) => {
    // Calculate the X and Y positions based on the mouse pointer's coordinates within the container
    const { left, top, width, height } = e.target.getBoundingClientRect()

    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100

    // Set the new background position based on the mouse position
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    isOpen && (
      <div className={`${styles['container']} ProjectQuickView`}>
        <Image
          width={20}
          height={20}
          alt="close"
          onClick={closeModal}
          src={
            'https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029162/Icon/close_kroplr.svg'
          }
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
          {data.images.quick_view.map((image, index) => (
            <SwiperSlide key={'quickview' + index}>
              <div className={styles['content-container']}>
                <div
                  className={styles['image-container']}
                  onMouseMove={handleMouseMove}
                >
                  <Image
                    src={image}
                    width={940}
                    height={626}
                    className={styles['image']}
                    alt="3d Model"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div
                    className={`${styles['image-zoom']} ${styles['background-image']}`}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: backgroundPosition,
                    }}
                    alt="3d Model"
                  />
                </div>
                <div className={styles['detail-container']}>
                  <div className={styles['title']}>{data.project}</div>
                  <div className={styles['description']}>
                    <Textfield
                      titleClassName={styles['title-textfield']}
                      descriptionClassName={styles['description-textfield']}
                      title="Location"
                      description={data.location}
                    />
                    <Textfield
                      titleClassName={styles['title-textfield']}
                      descriptionClassName={styles['description-textfield']}
                      title="Years"
                      description={data.year}
                    />
                    <Link
                      className={styles['link-project']}
                      href={`${data.link}`}
                    >
                      View Full Project
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  )
}

export default ProjectQuickView
