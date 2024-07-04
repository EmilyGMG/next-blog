"use client"

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'


export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  const status = "authenticated"
  // const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href='/login' className={styles.link}>Login</Link>) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.link}>Logout</span>
        </> )
      }
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
         <div className={styles.responsiveMenu}>
          <div className={styles.line}>Homepage</div>
          <div className={styles.line}>About</div>
          <div className={styles.line}>Contact</div>
          {status === "notauthenticated" ? (
            <Link href='login'>Login</Link>) : (
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </> )
          }
       </div>
      )}
    </>
  )
}
