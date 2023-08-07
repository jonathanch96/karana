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
          src="https://res.cloudinary.com/dsqneisaz/image/upload/f_auto/v1691029163/Icon/footer_nhdx2z.png"
          alt="background"
          className={`${styles.image}`}
          width={1440}
          height={500}
        />
      </div>
      <div className={styles['watermark']}>
        <Link href={contact.dassein} target="_blank">
          <Image
            style={{ marginRight: '15px' }}
            src="https://res.cloudinary.com/dsqneisaz/image/upload/w_145,h_18/v1691388627/Icon/dassein_sx0inn.svg"
            width={145}
            height={18}
            alt="dassein"
          />
        </Link>
        <Link href={contact.xerv} target="_blank">
          <Image
            src="https://res.cloudinary.com/dsqneisaz/image/upload/w_135,h_18/v1691388627/Icon/xerv_oybmu1.svg"
            width={135}
            height={18}
            alt="xerv"
          />
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
