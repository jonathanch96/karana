import Link from 'next/link'
import styles from './ProjectFilter.module.css'
import { useState } from 'react'

const ProjectFilter = (props) => {
  const [isShow, setIsShow] = useState(false)

  const toggleChild = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={styles['project-filter-container']}>
      <Link className={styles['link']} onClick={toggleChild} href={props.url}>
        {props.name}
      </Link>
      {isShow &&
        props.child.map((c) => {
          return (
            <Link
              className={`${styles['link']} ${styles['link-child']}`}
              key={c.name}
              href={c.url}
            >
              {c.name}
            </Link>
          )
        })}
    </div>
  )
}

export default ProjectFilter
