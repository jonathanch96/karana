import ProjectCard from './ProjectCard'
import styles from './ProjectContainer.module.css'
import ProjectFilter from './ProjectFilter'
import projects from '../../data/projects.json'

const ProjectContainer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['filter-container']}>
        <ProjectFilter child={[]} url={'#'} name={'All Projects'} />
        {projects.map((project) => (
          <ProjectFilter child={[]} url={project.link} name={project.menu} />
        ))}
      </div>
      <div className={`${styles['content-container']} row`}>
        {projects.map((data) => (
          <ProjectCard key={'project' + data.project} data={data} />
        ))}
      </div>
    </div>
  )
}

export default ProjectContainer
