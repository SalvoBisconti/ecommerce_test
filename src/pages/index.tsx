import AboutSection from "@/components/aboutSection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductSection from "@/components/productSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ProductSection />
    </main>
  );
}
