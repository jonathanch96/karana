import Image from 'next/image'
import styles from './Service.module.css'
import Content from '../shared/Content'

const Services = () => {
  return (
    <div className="container-background">
      <Image
        className={styles['image-background']}
        width={591}
        height={663}
        src="/images/background_services.png"
      />
      <Content title={`Product\nand Service`}>
        <div className={styles['container']}>
          <div className={styles['content-container']}>
            <div className={styles['title']}>Interior Design</div>
            <div className={styles['description']}>
              Menyediakan layanan Interior yang komprehensif sesuai dengan
              keinginan, bahan dan kualitas terbaik.
            </div>
          </div>
          <div className={styles['content-container']}>
            <div className={styles['title']}>Construction Building</div>
            <div className={styles['description']}>
              Menyediakan layanan konstruksi dan semua elemen bangunan yang
              melibatkan penanganan implementasi sesuai dengan desain secara
              keseluruhan.
            </div>
          </div>
          <div className={styles['content-container']}>
            <div className={styles['title']}>Comprehensive Design</div>
            <div className={styles['description']}>
              Menyediakan pelayanan jasa perancangan desain yang unik dan
              komunikatif sehingga memberikan kesan dan karakter tersendiri
              kepada klien.
            </div>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Services
