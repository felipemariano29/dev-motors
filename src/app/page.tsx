import { getHomeData, getSubmenuData } from "@/utils/actions/get-data";
import { Submenu } from "../components/home/submenu";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { About } from "@/components/home/about";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import { SubmenuProps } from "@/utils/submenu.type";

export default async function Home() {
  const { object: home }: HomeProps = await getHomeData();
  const submenu: SubmenuProps = await getSubmenuData();

  return (
    <main>
      {submenu.objects.length > 0 && <Submenu objects={submenu.objects} />}

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
