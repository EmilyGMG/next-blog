"use client"

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div 
      className={styles.container} 
      onClick={toggle}
      style={
        theme === "dark" 
        ? {backgroundColor: "white"}
        : {backgroundColor: "#0F172A"}
      } 
    >
      <Image src="/moon.png" alt='' width={14} height={14} />
      <div 
        className={styles.ball} 
        style={
          theme === "dark" 
          ? {left: 1, background: "#0F172A"}
          : {right: 1, background: "white"}
        } 
      />
      <Image src="/sun.png" alt='' width={14} height={14} />
    </div >
  )
}
