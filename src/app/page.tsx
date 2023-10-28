import Image from 'next/image'
import styles from './page.module.css'

import Pipeline from '@/components/pipeline'


export default function Home() {
  return (
    <main className={styles.main}>
      <h2></h2>
      <Pipeline></Pipeline>
    </main>
  )
}
