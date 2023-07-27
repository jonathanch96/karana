import styles from './Textfield.module.css'

const Textfield = (props) => {
  return (
    <div className={`${styles['container']} ${props.className}`}>
      <div className={styles['title']}>{props.title}</div>
      <div className={styles['description']}>
        {props.link && (
          <a className={styles['link']} href={props.link} target={props.target}>
            {props.description}
          </a>
        )}

        {!props.link && props.description}
      </div>
    </div>
  )
}

export default Textfield
