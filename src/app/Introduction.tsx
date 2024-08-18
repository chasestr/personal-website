"use client";

import React, { useEffect } from "react";
import styles from "./Introduction.module.css";
import * as COPY from "./INTRODUCTION_COPY";
import Image from "next/image";

const Introduction = () => {
  useEffect(() => {
    const nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.addEventListener("mouseover", () => {
        const randomColor = getRandomColor();
        nameElement.style.color = randomColor;
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src="/me.jpeg"
        alt="Picture of me"
        width={100}
        height={100}
        className={styles.image__mobile}
        unoptimized
      />
      <div>
        <div className={styles.title}>
          Hi, I'm{" "}
          <span id="name" className={styles.name}>
            Chase
          </span>
        </div>
        <div className={styles.content}>{COPY.firstParagraph}</div>
        <div className={styles.content}>{COPY.secondParagraph}</div>
        <ul className={styles.content}>
          <li className={styles.listItem}>{COPY.firstListItem}</li>
          <li className={styles.listItem}>{COPY.secondListItem}</li>
          <li className={styles.listItem}>{COPY.thirdListItem}</li>
        </ul>
      </div>
      <Image
        src="/me.jpeg"
        alt="Picture of me"
        width={100}
        height={100}
        className={styles.image__desktop}
        unoptimized
      />
    </div>
  );
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default Introduction;
