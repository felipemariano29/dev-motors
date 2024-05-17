"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Header() {
  const [top, setTop] = useState(true);

  const handleScroll = () => {
    setTop(!(window.scrollY > 10));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  return (
    <header
      className={`${styles.header} ${top ? styles.background : styles.fixed}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Link href="/">Dev Motors</Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">HOME</Link>

            <Link href="/#servicos">SERVIÇOS</Link>

            <Link href="/#contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
