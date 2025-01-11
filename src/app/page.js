import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/intro";
import Gallery from "./components/gallery";
import Lenis from "lenis";

export default function Home() {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.leftColumn}>
        <Intro />
      </div>
      <div className={styles.rightColumn}>
        <Gallery />
      </div>
    </div>
  );
}
