import Image from "next/image";
import styles from "./styles.module.scss";
import { ServiceProps } from "@/utils/home.type";

interface AboutProps {
  about: {
    description: string;
    banner: {
      url: string;
    };
  };
  services: ServiceProps[];
}

export function About({ about, services }: AboutProps) {
  return (
    <>
      <section className={styles.about} id="servicos">
        <article className={styles.content}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{about.description}</p>
        </article>

        <div className={styles.banner}>
          <Image
            className={styles.image}
            src={about.banner.url}
            alt="Imagem ilustrativa sobre a empresa"
            quality={100}
            fill={true}
            priority={true}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.banner}>
              <Image
                className={styles.image}
                src={service.image.url}
                alt={service.description}
                quality={100}
                fill={true}
                priority={true}
              />
            </div>

            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
