import Filter from "../filter";
import SearchEl from "../searchEl";
import ProductList from "../productList";
import { Dispatch, useState } from "react";
import { cartProductType } from "@/mocks/types";
import { IoFilterCircleOutline } from "react-icons/io5";
import FilterModal from "../filterModal";

const ProductSection = (props: {
  setCartCardData: Dispatch<React.SetStateAction<cartProductType[]>>;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
  cartCardData: cartProductType[];
  setIsProductAdded: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setRefresh, cartCardData, setIsProductAdded, setCartCardData } =
    props;
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-firstColor ">
      <h3 className="text-mobileTitle md:text-deskTitle font-bold">
        Our{" "}
        <span className="text-strongMobTitle md:text-strongDeskTitle font-black text-secondColor">
          Store
        </span>
      </h3>
      <Filter width={null} display="hidden md:flex" gap="gap-8" />
      <div className="flex justify-center gap-6 items-center w-[98vw] ">
        <SearchEl />
        <IoFilterCircleOutline
          className="text-[40px] hover:text-secondColor cursor-pointer transition-all duration-300 md:hidden"
          onClick={() => setOpenFilterModal((prev) => !prev)}
        />
        <FilterModal
          openFilterModal={openFilterModal}
          setOpenFilterModal={setOpenFilterModal}
        />
      </div>
      <ProductList
        setCartCardData={setCartCardData}
        setRefresh={setRefresh}
        cartCardData={cartCardData}
        setIsProductAdded={setIsProductAdded}
      />
    </div>
  );
};

export default ProductSection;
