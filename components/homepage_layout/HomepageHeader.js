import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomepageHeader.module.css'
import { useRouter } from 'next/router'
import data from '../../data/header.json'

const HomepageHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const router = useRouter()

  const isActive = (href) => {
    return router.pathname.startsWith(href) ? styles.active : ''
  }

  return (
    <nav className={`navbar navbar-expand-lg ${styles['navbar']}`}>
      <div className={`${styles.overlay}`}></div>
      <div className={`container ${styles.container}`}>
        <Link className={`navbar-brand ${styles['navbar-brand']}`} href="/">
          <Image
            src="https://res.cloudinary.com/dsqneisaz/image/upload/v1691029163/Icon/logo_white_x0yiyk.png"
            alt="Logo"
            width={200}
            height={29}
          />
        </Link>
        <button
          className={`navbar-toggler ${styles['navbar-toggler']}`}
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles['navbar-toggler-icon']}`}></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className={`navbar-nav ${styles['navbar-nav']}`}>
            <li className="nav-item">
              <Link className={`${styles['link']} ${isActive('/')}`} href="/">
                <span className={`nav-link ${styles['nav-link']}`}>Home</span>
              </Link>
            </li>
            {data.map((header) => (
              <li key={header.name} className="nav-item">
                <Link
                  className={`${styles['link']} ${isActive(header.link)}`}
                  href={header.link}
                  target={header.target ? header.target : ''}
                  rel={header.rel ? header.rel : ''}
                >
                  <span className={`nav-link ${styles['nav-link']}`}>
                    {header.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HomepageHeader
