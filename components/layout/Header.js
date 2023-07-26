import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import { useRouter } from 'next/router'

const Header = () => {
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
      <div className={`container ${styles.container}`}>
        <Link className={`navbar-brand ${styles['navbar-brand']}`} href="/">
          <Image src="/images/logo.png" alt="Logo" width={200} height={29} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className={`navbar-nav ${styles['navbar-nav']}`}>
            <li className="nav-item">
              <Link className={`${styles['link']}`} href="/">
                <span className={`nav-link ${styles['nav-link']}`}>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['link']} ${isActive('/projects')}`}
                href="/projects"
              >
                <span className={`nav-link ${styles['nav-link']}`}>
                  Project
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['link']} ${isActive('/services')}`}
                href="/services"
              >
                <span className={`nav-link ${styles['nav-link']}`}>
                  3D Modelling
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['link']} ${isActive('/about')}`}
                href="/about"
              >
                <span className={`nav-link ${styles['nav-link']}`}>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['link']} ${isActive('/contact')}`}
                href="/contact"
              >
                <span className={`nav-link ${styles['nav-link']}`}>
                  Contact
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles['link']} ${isActive('/book-a-call')}`}
                href="/book-a-call"
              >
                <span className={`nav-link ${styles['nav-link']}`}>
                  Book a Call
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
