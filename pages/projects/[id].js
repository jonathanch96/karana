import Layout from '@/components/layout/Layout'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { useRouter } from 'next/router'

const ProjectDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ProjectDetail id={id}></ProjectDetail>
    </Layout>
  )
}

export default ProjectDetailPage
