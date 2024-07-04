import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination'
import Image from 'next/image'
import Card from '../Card'


export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  )
}
