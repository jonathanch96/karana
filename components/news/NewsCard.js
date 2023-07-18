import Image from 'next/image'
import styles from './NewsCard.module.css'
import Link from 'next/link'

const NewsCard = (props) => {
  return (
    <Link href="/news/1" className={`${styles['news-card']} col-lg-4 col-md-6 col-sm-12`}>
      <Image
        width="430"
        height="350"
        alt="news-card"
        className={`${styles.image}`}
        src="/images/news/news_1.png"
      />
      <div className={styles['news-card__content']}>
        <div className={styles['news-card__subtitle']}>Sub Title</div>
        <div className={styles['news-card__title']}>Title</div>
      </div>
    </Link>
  )
}

export default NewsCard
