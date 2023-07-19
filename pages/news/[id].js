import Layout from '@/components/layout/Layout'
import NewsDetail from '@/components/news/NewsDetail'
import { useRouter } from 'next/router'

const NewsDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <NewsDetail id={id}></NewsDetail>
    </Layout>
  )
}

export default NewsDetailPage
