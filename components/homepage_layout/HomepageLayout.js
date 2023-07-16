import React from 'react'
import HomepageHeader from './HomepageHeader'
import HomepageFooter from './HomepageFooter'
import styles from './HomepageLayout.module.css'

const HomepageLayout = ({ children }) => {
  return (
    <>
      <HomepageHeader />
      <main className={`${styles['main']}`}>{children}</main>
      <HomepageFooter />
    </>
  )
}

export default HomepageLayout
