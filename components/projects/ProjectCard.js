import styles from './ProjectCard.module.css'
const ProjectCard = () => {
  const dynamicImageUrl = 'images/projects/project_1.png'
  return (
    <div
      className={`${styles['container']} col-lg-3 col-md-4 col-sm-6 col-12`}
      style={{ backgroundImage: `url(${dynamicImageUrl})` }}
    >
      <div className={styles['header']}>Quick View</div>
      <div className={styles['footer']}>Bening Cibubur</div>
    </div>
  )
}
export default ProjectCard
