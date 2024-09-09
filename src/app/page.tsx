import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/servgenie-logo.png" alt="Servgenie Logo" width={100} height={150}></Image>
        <h1>Any wish, anytime, anywhere.</h1>
        <p><i>Coming Soon...</i></p>
      </main>
      <footer className={styles.footer}>
        SERVGENIE.CO
      </footer>
    </div>
  );
}
