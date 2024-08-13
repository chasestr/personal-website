import Introduction from "./Introduction";
import styles from "./page.module.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Introduction/>
      <Projects/>
    </div>
  );
}

export default Home;