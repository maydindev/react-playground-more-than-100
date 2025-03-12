"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Video from "./Video";


export default function Home() {
  const animals = [
    {
      name: "geyik",
      videoUrl: "geyik.mp4",
    },
    {
      name: "salyangoz",
      videoUrl: "salyangoz.mp4",
    },
    {
      name: "kedi",
      videoUrl: "kedi.mp4",
    },
    {
      name: "örümcek",
      videoUrl: "örümcek.mp4",
    },
  ];

  const [videoInfo, setVideoInfo] = useState(animals);
  const [selectedVideo, setSelectedVideo] = useState();

  const handleRadioChange = (e) => {
    //console.log(e.target.value);
    setSelectedVideo(e.target.value);
  };

  useEffect(() => {
     //console.log(selectedVideo);
  })

  return (
    <div className={styles.myContainer}>
      <h1 className={styles.myTitle}>Project 6: Video Player</h1>
      <div>
        <Menu videoInfo={videoInfo} onRadioChange={handleRadioChange} />
      </div>
      <div>
        <Video selectedVideo={selectedVideo} />
      </div>
    </div>

    /*
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    */
  );
}
