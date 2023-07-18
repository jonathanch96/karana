import ProjectCard from './ProjectCard'
import styles from './ProjectContainer.module.css'

const ProjectContainer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['filter-container']}>
        <div>All Project</div>
        <div>Interior Design</div>
        <div>F&B (2)</div>
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
