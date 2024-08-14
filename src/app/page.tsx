import Contact from "./Contact";
import Introduction from "./Introduction";
import styles from "./page.module.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Introduction/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;