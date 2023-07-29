import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'
import data from '../../data/footer.json'
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
      <Image
        src="/images/watermark.png"
        width={297}
        height={19}
        className={styles['watermark']}
      />
      <div className={`container ${styles.container}`}>
        {data.map((footer) => (
          <div key={footer.group_name} className={`row ${styles['row']}`}>
            <div className="col-12">
              <ul className="list-unstyled">
                <li className={`${styles['footer-title']}`}>
                  {footer.group_name}
                </li>
                {footer.menu.map((sub) => (
                  <li className={`${styles['footer-list']}`}>
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

export default Footer
