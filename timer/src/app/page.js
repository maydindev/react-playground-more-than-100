"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialTime, setInitialTime] = useState(0); // Başlangıç zamanını saklamak için
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isActive && !isPaused) {
      const totalSeconds = minutes * 60 + seconds;
      setInitialTime(totalSeconds); // Başlangıç zamanını kaydet
      setTime(totalSeconds);
    } else if (isPaused) {
      setTime(initialTime); // Duraklatıldıktan sonra başlatıldığında başlangıç zamanına dön
    }
    setIsActive(true);
    setIsPaused(false);
    clearInterval(intervalRef.current);
  };

  const handlePauseResume = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsActive(true);
    } else {
      setIsPaused(true);
      setIsActive(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setMinutes(Math.floor(initialTime / 60));
    setSeconds(initialTime % 60);
    setTime(initialTime);
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  useEffect(() => {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
  }, [time]);

  return (
    <div className={styles.box}>
      <div>
        <input type="text"  onChange={(e) => setMinutes(Number(e.target.value))}/>
        {" "}Minutes
        <br />
        <br />
        <input type="text"  onChange={(e) => setSeconds(Number(e.target.value))}/>
        {" "}Seconds
        <br />
        <br />
      </div>
      <div>
        <button onClick={handleStart}>START</button>
        {" "}
        <button onClick={handlePauseResume}>
          {isPaused ? 'RESUME' : 'PAUSE'}
        </button>
        {" "}
        <button onClick={handleReset}>RESET</button>
      </div>
      <div>
        <h1>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
      </div>
    </div>
    
/*
    <div>
        <h1>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
         
        Önce minutes ve seconds stringe çevrildi. padStart yöntemi, bir dizeyi belirli bir uzunluğa kadar doldurmak için kullanılır. 
        İlk argüman hedef dize, en az 2 karakter uzunluğunda olur. 
        İkinci argüman doldurma karakteri, dize uzunluğu iki karakterden kısaysa, başına 0 eklenir
        
      </div>
*/
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
