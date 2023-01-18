import styles from "./Home.module.css";

import Links from "../Links/Links";
import Navigation from "../Navigation/Navigation";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
        <Links />
      </main>
    </>
  );
}
