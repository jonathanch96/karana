import styles from './Textfield.module.css'

const Textfield = (props) => {
  return (
    <div className={`${styles['container']} ${props.className}`}>
      <div className={styles['title']}>{props.title}</div>
      <div className={styles['description']}>{props.description}</div>
    </div>
  )
}

export default Textfield
