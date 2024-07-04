import Image from 'next/image'
import styles from './cardList.module.css'
import Link from 'next/link'

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime incidunt commodi omnis quia, obcaecati dolores voluptatum molestias laboriosam vero fugit reprehenderit cum? Magni vel esse ipsam aspernatur delectus reiciendis minima.</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}
