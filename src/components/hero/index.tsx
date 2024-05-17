import Image from "next/image";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}
export function Hero({
  heading,
  buttonUrl,
  buttonTitle,
  bannerUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{heading}</h1>

        <a href={buttonUrl} target="_blank" className={styles.link}>
          {icon}

          {buttonTitle}
        </a>
      </div>

      <div className={styles.bannerContainer}>
        <Image
          className={styles.banner}
          src={bannerUrl}
          alt={heading}
          quality={100}
          priority={true}
          fill={true}
        />
      </div>
    </main>
  );
}
