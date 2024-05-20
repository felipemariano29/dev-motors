import { getHomeData } from "@/utils/actions/get-data";
import { Submenu } from "../components/home/submenu";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { About } from "@/components/home/about";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const { object: home }: HomeProps = await getHomeData();

  return (
    <main>
      <Submenu />

      <Hero
        heading={home.metadata.heading}
        buttonTitle={home.metadata.cta_button.title}
        buttonUrl={home.metadata.cta_button.url}
        bannerUrl={home.metadata.banner.url}
        icon={<Phone size={24} color={"#fff"} />}
      />

      <Container>
        <About about={home.metadata.about} services={home.metadata.services} />
        <Footer object={home} />
      </Container>
    </main>
  );
}
