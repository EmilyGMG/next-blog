import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function CategoryList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popuilar Categories</div>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image 
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          styles
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
          <Image 
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
      </div>
    </div>
  )
}
