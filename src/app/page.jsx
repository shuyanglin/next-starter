import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}> 
      <div className={styles.item}>
        <h1 className={styles.title}>Hero title good punch</h1>
        <p className={styles.desc}>Yes and yes. Turning your ideas in to reality</p>
        <button className={styles.button}>See out Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero image"></Image>
      </div>
    </div>
  )
}
