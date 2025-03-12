"use client"
import Image from "next/image";

import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  function useFavicon(href) {
    useEffect(() => {
      if (!href) return;

      const removeLink = document.querySelector("link[rel='icon']");
      if (removeLink) {
        removeLink.remove();
      }

      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = href;

      document.head.appendChild(newLink);

      return () => {
        newLink.remove();
      };
    }, [href]);
  }

  const faviconMap = {
    shecodes:
      "https://www.shecodes.io/assets/favicons/favicon-32x32-ef9cc1de3ba7ad6d82e9ad4858c30f59678a695c9c78b52b826bd74f7fc3a02c.png",
    reAct:
      "https://www.reactgroup.org/wp-content/uploads/2020/05/cropped-Favicon-32x32.png",
    react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
  };

  const [id, setId] = useState("uidotdev");

  useFavicon(faviconMap[id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <button
        title="Favicon'u SheCodes logosuna ayarla"
        className={`link ${id === "uidotdev" && "active"}`}
        onClick={() => setId("shecodes")}
      >
        SheCodes
      </button>
      <button
        title="Favicon'u ReAct logosuna ayarla"
        className={`link ${id === "bytes" && "active"}`}
        onClick={() => setId("reAct")}
      >
        ReAct
      </button>
      <button
        title="Favicon'u React Newsletter logosuna ayarla"
        className={`link ${id === "react_newsletter" && "active"}`}
        onClick={() => setId("react_newsletter")}
      >
        React Newsletter
      </button>
    </section>
  );
}

// Talimatlar:
// useFavicon, belgenin favicon'unu dinamik olarak güncellemeyi sağlar.

// useFavicon("https://reactnewsletter.com/favicon/favicon-32x32.png")

// useFavicon ile verilen href kullanılarak belgenin favicon'u güncellenmelidir.
// useFavicon'a verilen href değiştiğinde, belgenin favicon'u güncellenmelidir.
// CodePen'de favicon değiştirme yetkisi olmadığı için bu kodu yerel bir React projesinde veya CodeSandbox gibi daha fazla yetki sağlayan platformlarda deneyebilirsiniz.
