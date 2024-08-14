import React from "react";
import GithubLogo from "./GithubIcon";
import styles from "./Contact.module.css";

const Contact = () => {
    const email = "brendanstrayer@gmail.com";

    return (
        <div className={styles.container}>
            <div className={styles.title}>Let's get in touch!</div>
            <div className={styles.infoContainer}>
                <div>
                    <a href={`mailto:${email}`} className={styles.email}>{email}</a>
                    <div>Dacono, CO</div>
                </div>
                <div className={styles.github}>
                    <GithubLogo width={50} height={50} href/>
                </div>
            </div>
        </div>
    )
}

export default Contact;