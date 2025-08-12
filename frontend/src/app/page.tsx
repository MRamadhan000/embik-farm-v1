import Image from "next/image";
import Hero from "../../components/Hero";
import OurValues from "../../components/OurValues";
import AboutUs from "../../components/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurValues/>
      <AboutUs/>
    </div>
  );
}
