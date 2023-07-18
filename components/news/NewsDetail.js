import Image from 'next/image'
import Layout from '../layout/Layout'
import styles from './NewsDetail.module.css'

const NewsDetail = (props) => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['date']}>Lorem Ipsum, 18 Agustus 2023</div>
        <div className={styles['title']}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className={styles['description-1']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa
          ligula, commodo a pulvinar a, vulputate at odio. Quisque eget
          scelerisque augue. Donec arcu ipsum, tristique et viverra at,
          tincidunt ac eros. Nulla sollicitudin enim eu nibh facilisis blandit.
          Donec ultrices est vel interdum venenatis. Mauris lacus quam, dictum
          sit amet nisl vitae, volutpat ornare tortor. Vivamus velit nulla,
          vehicula sed arcu in, mollis suscipit diam. Mauris et suscipit nisl.
          Phasellus massa felis, ultricies nec pretium ornare, tincidunt eu
          odio. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque semper, leo ac vulputate
          aliquet, mauris nisi hendrerit sapien, nec tristique velit nibh nec
          turpis. Duis porta mi id diam bibendum gravida. Etiam et ultrices leo.
          <br />
          <br />
          Nunc aliquet laoreet odio ac tincidunt. Integer ac ante mattis,
          feugiat enim sed, tincidunt augue. In felis erat, hendrerit eu
          ullamcorper at, mollis quis ex. In tellus nisl, tincidunt ut magna
          vitae, porta congue enim. Cras sollicitudin sem augue, eu maximus ex
          suscipit sed. In eget mauris nulla. In vestibulum pretium dolor vitae
          imperdiet. Mauris commodo fringilla tempus. Aliquam erat volutpat. Ut
          feugiat vel neque in lacinia. Nulla nunc mi, dignissim sit amet mauris
          et, porttitor accumsan mauris. Aliquam eget ex a ex elementum eleifend
          et in tellus.
        </div>
        <div className={styles['image-container']}>
          <Image
            className={`${styles['image']}`}
            width={940}
            height={529}
            alt="image"
            src="/images/news/news_2.png"
          />
        </div>
        <div className={styles['description-2']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa
          ligula, commodo a pulvinar a, vulputate at odio. Quisque eget
          scelerisque augue. Donec arcu ipsum, tristique et viverra at,
          tincidunt ac eros. Nulla sollicitudin enim eu nibh facilisis blandit.
          Donec ultrices est vel interdum venenatis. Mauris lacus quam, dictum
          sit amet nisl vitae, volutpat ornare tortor. Vivamus velit nulla,
          vehicula sed arcu in, mollis suscipit diam. Mauris et suscipit nisl.
          Phasellus massa felis, ultricies nec pretium ornare, tincidunt eu
          odio. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque semper, leo ac vulputate
          aliquet, mauris nisi hendrerit sapien, nec tristique velit nibh nec
          turpis. Duis porta mi id diam bibendum gravida. Etiam et ultrices leo.
        </div>
      </div>
      <div className={`${styles['social-container']}`}>
        <Image
          width={22}
          height={17}
          alt="twitter"
          className={styles['social-image']}
          src={'/images/news/twitter.svg'}
        />
        <Image
          width={22}
          height={21}
          alt="twitter"
          className={styles['social-image']}
          src={'/images/news/facebook.svg'}
        />
        <Image
          width={22}
          height={21}
          alt="twitter"
          className={styles['social-image']}
          src={'/images/news/pininterest.svg'}
        />
        <Image
          width={24}
          height={21}
          alt="twitter"
          className={styles['social-image']}
          src={'/images/news/love.svg'}
        />
      </div>
      <div className={styles['footer-container']}>
        <div className={`${styles['previous-container']}`}>
          <div className={`${styles['previous']}`}>Previous</div>
          <div className={`${styles['news']}`}>Lorem Ipsum dolor sit amet</div>
        </div>
        <div className={`${styles['next-container']}`}>
          <div className={`${styles['next']} text-align-right`}>Next</div>
          <div className={`${styles['news']} text-align-right`}>
            Lorem Ipsum dolor sit amet,
            <br />
            vconsectetur adipiscing elit.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewsDetail
