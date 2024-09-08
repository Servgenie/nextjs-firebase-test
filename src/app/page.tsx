import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img src="/servgenie-logo.png"/>
        <h1>Any wish, anytime, anywhere.</h1>
        <p><i>Coming Soon...</i></p>
      </main>
      <footer className={styles.footer}>
        SERVGENIE.CO
      </footer>
    </div>
  );
}
