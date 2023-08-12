import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
    console.log("hello")
  return (
    <div className={styles.container}>
        <div>Footer</div>
        <div className={styles.social}>
            <Image className={styles.icon} src="/1.png" width={15} height={15} alt="image Instagram"></Image>
            <Image className={styles.icon} src="/2.png" width={15} height={15} alt="image Facebook"></Image>
        </div>
    </div>
  )
}

export default Footer