import Home from '@/components/home/Home'
import HomepageLayout from '@/components/homepage_layout/HomepageLayout'
const HomePage = ({ posts }) => {
  return (
    <HomepageLayout>
      <Home />
    </HomepageLayout>
  )
}

export default HomePage
