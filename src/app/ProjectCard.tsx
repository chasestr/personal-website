import React from "react";
import styles from "./ProjectCard.module.css";
import GithubLogo from "./GithubIcon";

interface ProjectCardProps {
    title: string;
    github: string;
    description: string;
    technologies: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.github_logo}>
                    <a href={props.github} target="_blank"><GithubLogo/></a>
                </div>
            </div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.technologies}>
                {props.technologies.map((t,idx) => <div key={idx} className={styles.technology}>{t}</div>)}
            </div>
        </div>
    );
}

export default ProjectCard;