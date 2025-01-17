import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment ..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim
            esse molestias odio eaque est cumque voluptates obcaecati,
            cupiditate earum nostrum quas, iure sequi numquam ullam eum,
            voluptas ab excepturi?
          </p>
        </div>
      </div>
    </div>
  );
}
