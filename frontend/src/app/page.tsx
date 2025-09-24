import Image from "next/image";
import Hero from "./components/Hero";
import OurValues from "./components/OurValues";
import AboutUs from "./components/AboutUs";
import OurProducts from "./components/OurProducts";
import Stats from "./components/Stats";
import CTASelection from "./components/CtaSelection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurValues />
      <AboutUs />
      {/* <Stats/> */}
      <GallerySection
        title="Our Gallery"
        description="Kumpulan momen dan dokumentasi kegiatan kami yang penuh makna."
        images={[
          "https://picsum.photos/400?random=1",
          "https://picsum.photos/400?random=2",
          "https://picsum.photos/400?random=3",
          "https://picsum.photos/400?random=4",
          "https://picsum.photos/400?random=5",
          "https://picsum.photos/400?random=6",
          "https://picsum.photos/400?random=7",
          "https://picsum.photos/400?random=8",
          "https://picsum.photos/400?random=9", // lebih dari 8, auto di-slice
        ]}
      />
      <OurProducts />
      <CTASelection />
    </div>
  );
}
