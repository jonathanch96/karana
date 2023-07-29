import React from 'react'
import styles from './Content.module.css'

const Content = (props) => {
  const titleParts = props.title.split('\n')
  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <div className={styles['title']}>
          {titleParts.map((part, index) => (
            <React.Fragment key={'content' + index}>
              {index > 0 && <br />} {part}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles['description']}>{props.children}</div>
    </div>
  )
}

export default Content
