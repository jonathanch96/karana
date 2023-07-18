import React from 'react'
import styles from './NewsContainer.module.css'
import NewsCard from './NewsCard'

const NewsContainer = () => {
  return (
    <div className='container-fluid'>
      <div className={`${styles['news-container']} row g-4 row-gap-5`}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default NewsContainer
