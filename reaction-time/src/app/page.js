"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  function ReactionTest() {
    const [showStartButton, setShowStartButton] = useState(true);
    const [showRedBox, setShowRedBox] = useState(false);
    const [showGreenBox, setShowGreenBox] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [clickDurationText, setClickDurationText] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);

    
    useEffect(() => {
      if(gameStarted) {
        const timer = setTimeout(() => {
          setShowRedBox(false);  
          setShowGreenBox(true);
        }, 5000)
        return () => clearTimeout(timer);
      }    
    }, [gameStarted]);
    

    const handleMouseDown = () => {
      setStartTime(Date.now());
    };

    const handleMouseUp = () => {
      if (startTime !== null) {
        const endTime = Date.now();
        const duration = endTime - startTime;
        setClickDurationText(`You took ${duration} ms!`);
        setStartTime(null); // Reset the start time
        setShowGreenBox(false);
        setShowStartButton(true)
        setGameStarted(false);
      }
    };

    return (
      <div className={styles.myContainer}>
        <div>
          {
            showStartButton && <button className={styles.startButton}
              onClick={() => {
                setShowStartButton(false)
                setShowRedBox(true); 
                setClickDurationText("")
                setGameStarted(true);
              }}
            >
              Start Game
            </button>
          }
          </div>
          <div>
      
          {showRedBox && <button className={styles.redBox} onClick={() => {
                setClickDurationText("You clicked too early!");
                setShowRedBox(false);
                setShowGreenBox(false);
                setShowStartButton(true)
                setGameStarted(false);
              }}></button>}
          </div>
          <div>
          {showGreenBox && <button
              className={styles.greenBox}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            ></button>}
            
          
        </div>
      

        <h2>{clickDurationText}</h2>
      </div>
    );
  }

  return (
    <ReactionTest />

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
