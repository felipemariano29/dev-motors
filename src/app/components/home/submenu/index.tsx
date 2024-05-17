"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.icon} onClick={toggleMenu}>
        <Menu size={34} color={"#121212"} />
        Menu
      </div>

      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button className={styles.closeButton} onClick={toggleMenu}>
            <X size={54} color={"#121212"} />
          </button>
        )}

        <li>
          <Link href="/post/1">Página 1</Link>
        </li>

        <li>
          <Link href="/post/2">Página 2</Link>
        </li>

        <li>
          <Link href="/post/3">Página 3</Link>
        </li>
      </ul>
    </section>
  );
}
