import ProjectCard from './ProjectCard'
import styles from './ProjectContainer.module.css'
import ProjectFilter from './ProjectFilter'

const ProjectContainer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['filter-container']}>
        <ProjectFilter child={[]} url={'/'} name={'All Projects'} />
        <ProjectFilter
          child={[
            { url: '/', name: 'F&B (2)' },
            { url: '/', name: 'Beauty Clinic (1)' },
            { url: '/', name: 'Home' },
          ]}
          url={'#'}
          name={'Interior Design'}
        />
        <ProjectFilter child={[]} url={'/'} name={'Construction Building'} />
        <ProjectFilter child={[]} url={'/'} name={'Comprehensive Design'} />
      </div>
      <div className={`${styles['content-container']} row`}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectContainer
