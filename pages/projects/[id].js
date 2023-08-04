import Layout from '@/components/layout/Layout'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { useRouter } from 'next/router'
import projects from '../../data/projects.json'

const ProjectDetailPage = ({ project }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ProjectDetail project={project} id={id}></ProjectDetail>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = projects.map((project) => {
    const linkParts = project.link.split('/') // Split the link string by '/'
    const id = linkParts[linkParts.length - 1] // Get the last part of the link as the id
    return {
      params: { id: id }, // Replace 'id' with the name of your dynamic parameter
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const project = projects.find((project) => project.link === `/projects/${id}`)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}

export default ProjectDetailPage
