"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmenuProps } from "@/utils/submenu.type";

export function Submenu({ objects: submenu }: SubmenuProps) {
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

        {submenu.map((submenuItem) => (
          <li key={submenuItem.slug}>
            <Link href={`/post/${submenuItem.slug}`}>{submenuItem.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
