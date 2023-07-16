import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className={`py-4 ${styles.footer}`}>
      <div className={`${styles['img-container']}`}>
        <Image
          src="/images/footer.png"
          alt="background"
          className={`${styles.image}`}
          width={1440}
          height={500}
        />
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">
              <li className={`${styles['footer-title']}`}>Pages</li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/about">
                  About
                </Link>
              </li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/project">
                  Project
                </Link>
              </li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/product">
                  Product
                </Link>
              </li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/news">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">
              <li className={`${styles['footer-title']}`}>Social</li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/">
                  Instagram
                </Link>
              </li>
              <li className={`${styles['footer-list']}`}>
                <Link className={`${styles.link}`} href="/">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">
              <li className={`${styles['footer-title']}`}>Location</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">
              <li className={`${styles['footer-title']}`}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
