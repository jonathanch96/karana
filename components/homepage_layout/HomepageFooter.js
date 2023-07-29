import Link from 'next/link'
import styles from './HomepageFooter.module.css'
import Image from 'next/image'
import data from '../../data/footer.json'
const HomepageFooter = () => {
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
      <Image
        src="/images/watermark.png"
        width={297}
        height={19}
        className={styles['watermark']}
        alt="watermark"
      />
      <div className={`container ${styles.container}`}>
        {data.map((footer, index) => (
          <div
            key={'footer' + footer.group_name}
            className={`row ${styles['row']}`}
          >
            <div className="col-12">
              <ul className="list-unstyled">
                <li className={`${styles['footer-title']}`}>
                  {footer.group_name}
                </li>
                {footer.menu.map((sub, subIndex) => (
                  <li
                    key={'submenu' + index + sub.link + subIndex}
                    className={`${styles['footer-list']}`}
                  >
                    <Link
                      className={`${styles.link}`}
                      href={sub.link}
                      target={sub.target ? sub.target : ''}
                      rel={sub.rel ? sub.rel : ''}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default HomepageFooter
