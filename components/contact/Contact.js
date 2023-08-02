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
        src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029162/Icon/background_contact_z594v2.png"
      />
      <Content title="Contact">
        <div className={styles['container']}>
          <div className={styles['container-left']}>
            <Textfield
              link={contact.email_link}
              title="Email"
              description={contact.email}
              target="_blank"
              rel="noopener noreferrer"
            />
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
                src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029165/Icon/map_u2fafx.png"
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
