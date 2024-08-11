import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.card_container}>
        <ProjectCard
          title="StoryStash"
          github="https://github.com/chasestr/book-tracker"
          technologies={[
            "Typescript",
            "React",
            "GraphQL",
            "Docker",
            "PostgreSQL",
          ]}
          description="Full-stack web application designed for tracking your reading progress"
        />
        <ProjectCard
          title="StoryStash"
          github="https://github.com/chasestr/book-tracker"
          technologies={[
            "Typescript",
            "React",
            "GraphQL",
            "Docker",
            "PostgreSQL",
          ]}
          description="Full-stack web application designed for tracking your reading progress"
        />
        <ProjectCard
          title="StoryStash"
          github="https://github.com/chasestr/book-tracker"
          technologies={[
            "Typescript",
            "React",
            "GraphQL",
            "Docker",
            "PostgreSQL",
          ]}
          description="Full-stack web application designed for tracking your reading progress"
        />
      </div>
    </div>
  );
}
