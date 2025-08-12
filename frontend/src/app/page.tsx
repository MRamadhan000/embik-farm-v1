import Image from "next/image";
import Hero from "../../components/Herov2";
import OurValues from "../../components/OurValues2";
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
