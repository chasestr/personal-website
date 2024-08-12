import Introduction from "./Introduction";
import styles from "./page.module.css";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Introduction/>
      <Projects/>
    </div>
  );
}
