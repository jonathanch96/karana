import InstagramContainer from '@/components/instagram/InstagramContainer'
import Layout from '@/components/layout/Layout'
import NewsContainer from '@/components/news/NewsContainer'

const NewsPage = ({ posts }) => {
  return (
    <Layout>
      <NewsContainer />
    </Layout>
  )
}

export default NewsPage
