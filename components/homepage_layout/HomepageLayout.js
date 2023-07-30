import React from 'react'
import HomepageHeader from './HomepageHeader'
import HomepageFooter from './HomepageFooter'
import styles from './HomepageLayout.module.css'
import Link from 'next/link'
import contact from '../../data/contact.json'
import Image from 'next/image'

const HomepageLayout = ({ children }) => {
  return (
    <>
      <HomepageHeader />
      <main className={`${styles['main']}`}>
        {children}
        <Link
          href={contact.wa_link}
          target="_blank"
          className={styles['floating-link']}
        >
          <Image
            src={'/images/whatsapp.png'}
            width={75}
            height={75}
            alt="Whatsapp"
            className={styles['floating-whatsapp']}
          />
        </Link>
      </main>
      <HomepageFooter />
    </>
  )
}

export default HomepageLayout
