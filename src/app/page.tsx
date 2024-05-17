import { getHomeData } from "@/utils/actions/get-data";
import { Submenu } from "../components/home/submenu";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object: home }: HomeProps = await getHomeData();

  console.log(home);

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
    </main>
  );
}
