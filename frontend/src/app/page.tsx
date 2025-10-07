import Image from "next/image";
import Hero from "@/components/Hero";
import OurValues from "@/components/OurValues";
import AboutUs from "@/components/AboutUs";
import OurProducts from "@/components/OurProducts";
import Stats from "@/components/Stats";
import CTASelection from "@/components/CtaSelection";
import GallerySection from "@/components/GallerySection";

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
          "/images/hero/gallery/g-1.jpg",
          "/images/hero/gallery/g-2.jpg",
          "/images/hero/gallery/g-3.jpg",
          "/images/hero/gallery/g-4.jpg",
          "/images/hero/gallery/g-5.jpg",
          "/images/hero/gallery/g-6.jpg",
          "/images/hero/gallery/g-7.jpg",
          "/images/hero/gallery/g-8.jpg",
        ]}
      />
      <OurProducts />
      <CTASelection />
    </div>
  );
}
