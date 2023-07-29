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
import { useRef } from 'react'
import Textfield from '../shared/Textfield'
import Link from 'next/link'

const ProjectQuickView = ({ data, isOpen, closeModal }) => {
  const swiperRef = useRef(null)
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
          {data.images.quick_view.map((image, index) => (
            <SwiperSlide key={'quickview' + index}>
              <div className={styles['content-container']}>
                <div className={styles['image-container']}>
                  <Image
                    src={image}
                    width={940}
                    height={626}
                    className={styles['image']}
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
