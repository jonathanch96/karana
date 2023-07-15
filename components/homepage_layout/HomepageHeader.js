import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomepageHeader.module.css'

const HomepageHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles['navbar']}`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
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
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <span className="nav-link">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HomepageHeader
