import Image from 'next/image'
import styles from '../app/page.module.css'
import data from '../mockdata/data.json';
import projectImg from '../mockdata/mock-project-image.jpeg';

export default function Projects() {
  console.log(data)
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Projects</h1>

      <div>
        {data.projects.map(({ name, id }) => (
          <div style={{ display: "flex", alignItems: "center", margin: 20 }}>
            <Image
              src={projectImg}
              width={612}
              height={340}
              alt="Picture of the author"
            />
            <div style={{ padding: 20 }}>
              <span>{id}</span>
              <h2>{name}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
