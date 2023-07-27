import Image from 'next/image'
import Content from '../shared/Content'
import styles from './About.module.css'
import Textfield from '../shared/Textfield'
import FloatingBackground from '../shared/FloatingBackground'

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
        <div className={styles['description-1']}>
          Karana adalah sebuah perusahaan dibidang Arstitektur, Konstruksi
          Bangunan dan Desain Interior. Maksud pendiriannya adalah untuk
          memberikan jasa-jasa pekerjaan dibidang Rancang Bangun Konstruksi
          serta interior yang diperuntukan untuk menunjang pembangunan Rumah
          tinggal, Fasilitas Komersial, dan Perkantoran, yang meliputi konsultan
          bangunan, bangunan interior, mechanical electrical, dan eksterior
          bangunan.
        </div>
        <div className={styles['description-2']}>
          Dengan kemampuan, keahlian dan sumber daya yang berkualitas, karana
          akan memberikan layanan pekerjaan konstruksi dan interior yang selalu
          menjaga kualitas dan ketepatan waktu pelaksanaan, untuk memberikan
          kepuasan untuk klien.
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
            <Textfield
              className={styles['team-item']}
              title="Denys Krishna Yudistira"
              description="Director"
            />
            <Textfield
              className={styles['team-item']}
              title="Firdaus Santana"
              description="HRD"
            />
            <Textfield
              className={styles['team-item']}
              title="Gilang Briskanandita"
              description="Finance Director"
            />
            <Textfield
              className={styles['team-item']}
              title="Datu Aria Kandhabuana"
              description="Project Director"
            />

            <Textfield
              className={styles['team-item']}
              title="Yudo Prasetya"
              description="Project Manager"
            />
            <Textfield
              className={styles['team-item']}
              title="Iman Diman"
              description="Project Manager"
            />
            <Textfield
              className={styles['team-item']}
              title="Irsalina Adani"
              description="Project Manager"
            />
            <Textfield
              className={styles['team-item']}
              title="Reyhan Savero Putra"
              description="Project Manager"
            />
            <Textfield
              className={styles['team-item']}
              title="Dwi Ismiyanti"
              description="Interior Designer"
            />
            <Textfield
              className={styles['team-item']}
              title="Gissa Nurhalisa"
              description="Designer"
            />
          </div>
        </Content>
      </div>
    </div>
  )
}

export default About
