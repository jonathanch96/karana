import styles from './Content.module.css'

const Content = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <div className={styles['title']}>{props.title}</div>
      </div>

      <div className={styles['description']}>{props.children}</div>
    </div>
  )
}

export default Content
