import React from 'react'
import HomepageHeader from './HomepageHeader'
import HomepageFooter from './HomepageFooter'

const HomepageLayout = ({ children }) => {
  return (
    <>
      <HomepageHeader />
      <main>{children}</main>
      <HomepageFooter />
    </>
  )
}

export default HomepageLayout
