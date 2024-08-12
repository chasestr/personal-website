import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import { PORTFOLIO_COPY, STORYSTASH_COPY } from "./PROJECTS_COPY";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.card_container}>
        <ProjectCard {...STORYSTASH_COPY} />
        <ProjectCard {...PORTFOLIO_COPY} />
      </div>
    </div>
  );
}
