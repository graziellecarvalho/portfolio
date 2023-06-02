import Image from 'next/image'
import styles from '../app/page.module.css'
import TitleSection from '../components/TitleSection'
import SkillTree from '@/components/SkillTree'

export default function Home() {
  return (
    <main className={styles.main}>
      <TitleSection />
      <SkillTree />
    </main>
  )
}
