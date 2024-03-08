import AboutSection from "@/components/aboutSection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductSection from "@/components/productSection";
import Cart from "@/components/cart";
import { cartProductType } from "@/mocks/types";
import { useState, useEffect } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [cartInArray, setCartInArray] = useState<any>([]);
  const [refresh, setRefresh] = useState(false);
  const [cartCardData, setCartCardData] = useState<cartProductType[]>([]);
  // const [searchedEl, setSearchedEl] = useState<string>();

  const onHandleChangeStatus = () => setOpenModal((prev) => !prev);

  const takeData = () => {
    const cartData =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || '""')
        : [];
    setCartCardData(cartData);
  };

  useEffect(() => {
    takeData();
  }, [refresh]);

  return (
    <main className="flex flex-col">
      <Header
        onHandleChangeStatus={onHandleChangeStatus}
        cartCardData={cartCardData}
      />
      <Hero />
      <Cart
        openModal={openModal}
        onHandleChangeStatus={onHandleChangeStatus}
        cartCardData={cartCardData}
        setCartCardData={setCartCardData}
      />
      <AboutSection />
      <ProductSection
        cartCardData={cartCardData}
        setCartInArray={setCartInArray}
        setRefresh={setRefresh}
        // setSearchedEl={setSearchedEl}
        // searchedEl={searchedEl}
      />
    </main>
  );
}
