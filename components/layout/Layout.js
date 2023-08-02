import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import contact from '../../data/contact.json'
const Layout = ({ children }) => {
  return (
    <>
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
              'https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029164/Icon/whatsapp_njz4km.png'
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
    </>
  )
}

export default Layout
