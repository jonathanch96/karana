import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import data from '../../data/header.json'

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
      <Link className={`navbar-brand ${styles['navbar-brand']}`} href="/">
        <Image
          className={`${styles['logo']}`}
          src="https://res.cloudinary.com/dsqneisaz/image/upload/v1691165245/Icon/logo_numk7k.svg"
          alt="Logo"
          width={200}
          height={29}
        />
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
          {data.map((header) => (
            <li key={'header' + header.name} className="nav-item">
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
    </nav>
  )
}

export default Header
