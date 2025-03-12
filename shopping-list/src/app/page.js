"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [list, setList] = useState(["Elma"]);

  const handleClickAdd = () => {
    setList([...list, textInput]);
    setTextInput("");
  };

  const handleChangeText = (e) => {
    setTextInput(e.target.value);
  };

  const handleClickRemove = (index) => {
    setList(list.filter((item, itemIndex) => itemIndex !== index));
  };

  return (
    <div className={styles.myContainer}>
      <div className={styles.myTitle}>
        <h1>Project 4: Alışveriş Listesi</h1>
      </div>

      <div className={styles.myBox}>
        <h2>Alınacaklar</h2>
        <span>
          <input
            type="text"
            value={textInput}
            placeholder="Yeni bir madde ekleyin"
            onChange={handleChangeText}
          />
          <button onClick={handleClickAdd}>Add</button>
          <ul className={styles.listUl}>
            {list.map((item, index) => (
              <li key={index} className={styles.listLi}>
                {item}
                <button className={styles.listButton} onClick={() => handleClickRemove(index)}><strong>X</strong></button>
              </li>
            ))}
          </ul>
        </span>
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
    </main>*/
  );
}
