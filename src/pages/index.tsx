import AboutSection from "@/components/aboutSection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductSection from "@/components/productSection";
import Cart from "@/components/cart";

import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <main className="flex flex-col">
      <Header setOpenModal={setOpenModal} />
      <Hero />
      <Cart openModal={openModal} />
      <AboutSection />
      <ProductSection />
    </main>
  );
}
