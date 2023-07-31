import Link from 'next/link'
import styles from './HomepageFooter.module.css'
import Image from 'next/image'
import data from '../../data/footer.json'
import contact from '../../data/contact.json'

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
      <div className={styles['watermark']}>
        <Image
          src="/images/designed_by.png"
          width={66}
          height={13}
          style={{ marginRight: '10px', alignSelf: 'end' }}
          alt="designed by"
        />
        <Link href={contact.dassein} target="_blank">
          <Image
            style={{ marginRight: '15px' }}
            src="/images/dassein.png"
            width={60}
            height={15}
            alt="dassein"
          />
        </Link>
        <Image
          style={{ marginRight: '15px', alignSelf: 'end' }}
          src="/images/powered_by.png"
          width={78}
          height={15}
          alt="powered by"
        />
        <Link href={contact.xerv} target="_blank">
          {' '}
          <Image src="/images/xerv.png" width={57} height={15} alt="xerv" />
        </Link>
      </div>
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
