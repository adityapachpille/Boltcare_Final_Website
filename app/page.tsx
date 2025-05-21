import Image from "next/image";
import HeroSlider from '@/components/HeroSlider';
import AboutUs from "@/components/Aboutus";
import Product from "@/components/Product";
import Whychoseus from "@/components/whychoseus";
import WeServeindustries from "@/components/Weserveindustries";
import FAQSection from "@/components/FAQSection";



export default function Home() {
  return (
    <>
    <HeroSlider />
    <AboutUs />
    <Product />
    <Whychoseus />
    <WeServeindustries />
    <FAQSection />
    
    </>
  );
}
