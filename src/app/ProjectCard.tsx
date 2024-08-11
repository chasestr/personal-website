import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    title: string;
    github: string;
    description: string;
    technologies: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className={styles.container}>
            <a className={styles.title} href={props.github} target="blank">
                {props.title}
            </a>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.technologies}>
                {props.technologies.map((t,idx) => <div key={idx} className={styles.technology}>{t}</div>)}
            </div>
        </div>
    );
}