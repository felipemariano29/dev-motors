import { getPageDataBySlug } from "@/utils/actions/get-data";
import styles from "./style.module.scss";
import { PostProps } from "@/utils/post.type";
import { Phone } from "lucide-react";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  try {
    const { objects: post }: PostProps = await getPageDataBySlug(slug);

    return {
      title: `DevMotors - ${post[0].title}`,
      description: post[0].metadata.description.text,
    };
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina especializada",
      description: "Oficina de carros em São Paulo, SP",
    };
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects: post }: PostProps = await getPageDataBySlug(slug);

  return (
    <>
      <Hero
        heading={post[0].title}
        buttonTitle={post[0].metadata.button.title}
        buttonUrl={post[0].metadata.button.url}
        bannerUrl={post[0].metadata.banner.url}
        icon={<Phone size={24} color={"#fff"} />}
      />

      <Container>
        <section className={styles.section}>
          <article className={styles.article}>
            <h1 className={styles.title}>
              {post[0].metadata.description.title}
            </h1>

            <p>{post[0].metadata.description.text}</p>

            {post[0].metadata.description.button_active && (
              <a
                href={post[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {post[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.banner}>
            <Image
              alt={post[0].title}
              className={styles.image}
              src={post[0].metadata.banner.url}
              quality={100}
              fill={true}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
