import Image from "next/image";
import Hero from "../components/Herov";
import OurValues from "../components/OurValues";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import Stats from "../components/Stats";
import CTASelection from "../components/CtaSelection";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurValues/>
      <AboutUs/>
      {/* <Stats/> */}
      <OurProducts/>
      <CTASelection/>
    </div>
  );
}
