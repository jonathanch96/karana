import Image from 'next/image'
import Content from '../shared/Content'
import styles from './About.module.css'
import Textfield from '../shared/Textfield'
import about from '../../data/about.json'
const About = () => {
  return (
    <div className="container-background">
      <Image
        className={styles['image-background']}
        width={1440}
        height={1147}
        src="/images/background_about.png"
      />

      <Content title="">
        <div className={styles['description-1']}>{about.description_1}</div>
        <div className={styles['description-2']}>
         {about.description_2}
        </div>
      </Content>
      <div className={styles['image-container']}>
        <Image
          src="/images/team.png"
          alt="background"
          className={`${styles.image}`}
          width={1180}
          height={663}
        />
      </div>
      <div className={styles['container']}>
        <Content title="Meet Our Team">
          <div className={styles['team-container']}>
            {about.team_list.map((team) => (
              <Textfield
                className={styles['team-item']}
                title={team.name}
                description={team.title}
              />
            ))}
          </div>
        </Content>
      </div>
    </div>
  )
}

export default About
