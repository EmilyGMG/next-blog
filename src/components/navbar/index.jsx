import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks'
import ThemeToggle from '../themeToggle'


export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
        <Image src="/instagram.png" alt='instagram' width={24} height={24} />
        <Image src="/tikTok.png" alt='tikTok' width={24} height={24} />
        <Image src="/youtube.png" alt='youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="/Contact" className={styles.link}>Contact</Link>
          <Link href="/About" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
