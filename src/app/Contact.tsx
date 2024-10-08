import React from "react";
import GithubLogo from "./GithubIcon";
import styles from "./Contact.module.css";

const Contact = () => {
  const email = "brendanstrayer@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/brendan-strayer/";

  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's get in touch!</div>
      <div className={styles.info_container}>
        <div>
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
          <a href={linkedIn} className={styles.linkedIn}>
            LinkedIn
          </a>
          <div>Dacono, CO</div>
        </div>
        <div className={styles.github}>
          <GithubLogo className={styles.github_logo} href />
        </div>
      </div>
    </div>
  );
};

export default Contact;
