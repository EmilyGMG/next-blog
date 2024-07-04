import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured";
import CategoryList from "@/components/categoryList";
import CardList from "@/components/cardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Featured 
          titulo="links"
        />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
    </>
  );
}
