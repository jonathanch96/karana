import Image from 'next/image'
import styles from './Contact.module.css'
import Content from '../shared/Content'
import Textfield from '../shared/Textfield'

const Contact = () => {
  return (
    <div className="container-background">
      <Image
        className={styles['image-background']}
        width={528}
        height={731}
        src="/images/background_contact.png"
      />
      <Content title="Contact">
        <div className={styles['container']}>
          <div className={styles['container-left']}>
            <Textfield title="Email" description="karanabureau@gmail.com" />
            <Textfield
              link="https://wa.me/6281224886828?text=Halo Karana, Saya ingin bertanya tentang ..."
              target="_blank"
              title="Phone/Whatsapp"
              description="+62 812-2488-6828"
            />
            <Textfield
              link="https://www.instagram.com/karana.bureau/"
              target="_blank"
              title="Instagram"
              description="@karana.bureau"
            />
          </div>
          <div className={styles['container-right']}>
            <Textfield
              title="Address"
              description="Jl. Batik Kumeli No.38 Kota Bandung, Jawa Barat"
              className={styles['address']}
            />
            <a href="" target="_blank">
              <Image
                src="/images/map.png"
                className={styles['image']}
                width={406}
                height={235}
              />
            </a>
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Contact
