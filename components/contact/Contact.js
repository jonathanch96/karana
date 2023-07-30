import Image from 'next/image'
import styles from './Contact.module.css'
import Content from '../shared/Content'
import Textfield from '../shared/Textfield'
import contact from '../../data/contact.json'
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
            <Textfield title="Email" description={contact.email} />
            <Textfield
              link={contact.wa_link}
              target="_blank"
              rel="noopener noreferrer"
              title="Phone/Whatsapp"
              description={contact.wa_text}
            />
            <Textfield
              link={contact.instagram_link}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              description={contact.instagram_text}
            />
          </div>
          <div className={styles['container-right']}>
            <Textfield
              title="Address"
              description={contact.address}
              className={styles['address']}
            />
            <a href={contact.maps_link} target="_blank">
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
