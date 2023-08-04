import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import contact from '../../data/contact.json'
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main className={`${styles['main']}`}>
        {children}
        <Link
          href={contact.wa_link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['floating-link']}
        >
          <Image
            src={
              'https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691165245/Icon/whatsapp_uxytz3.svg'
            }
            width={75}
            height={75}
            alt="Whatsapp"
            className={styles['floating-whatsapp']}
          />
        </Link>
      </main>
      <div id="modal-root"></div>
      <Footer />
    </div>
  )
}

export default Layout
