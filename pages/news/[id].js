import NewsDetail from '@/components/news/NewsDetail'
import { useRouter } from 'next/router'

const NewsDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <NewsDetail id={id}></NewsDetail>
}

export default NewsDetailPage
