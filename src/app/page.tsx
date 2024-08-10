import Introduction from "./Introduction";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Introduction/>
    </div>
  );
}
