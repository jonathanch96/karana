import React from 'react'
import HomepageHeader from './HomepageHeader'
import HomepageFooter from './HomepageFooter'
import styles from './HomepageLayout.module.css'
import Link from 'next/link'
import contact from '../../data/contact.json'
import Image from 'next/image'
import './HomepageLayout.css'

const HomepageLayout = ({ children }) => {
  return (
    <div className='HomepageLayout'>
      <HomepageHeader />
      <main className={`${styles['main']}`}>
        {children}
        <Link
          href={contact.wa_link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['floating-link']}
        >
          <Image
            src={'https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029164/Icon/whatsapp_njz4km.png'}
            width={75}
            height={75}
            alt="Whatsapp"
            className={styles['floating-whatsapp']}
          />
        </Link>
      </main>
      <HomepageFooter />
    </div>
  )
}

export default HomepageLayout
