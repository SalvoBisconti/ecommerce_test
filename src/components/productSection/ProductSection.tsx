import Filter from "../filter";
import SearchEl from "../searchEl";
import ProductList from "../productList";
import { Dispatch, useState } from "react";
import { cartProductType } from "@/mocks/types";
import { IoFilterCircleOutline } from "react-icons/io5";
import FilterModal from "../filterModal";

const ProductSection = (props: {
  setCartInArray: Dispatch<React.SetStateAction<cartProductType[]>>;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
  cartCardData: cartProductType[];
}) => {
  const { setCartInArray, setRefresh, cartCardData } = props;
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-firstColor ">
      <h3 className="text-mobileTitle md:text-deskTitle font-bold">
        Our{" "}
        <span className="text-strongMobTitle md:text-strongDeskTitle font-black text-secondColor">
          Store
        </span>
      </h3>
      <Filter flexDirection="flex-row hidden md:flex" gap="gap-8" />
      <div className="flex justify-center gap-6 items-center w-[98vw] ">
        <SearchEl />
        <IoFilterCircleOutline
          className="text-[40px] hover:text-secondColor cursor-pointer transition-all duration-500"
          onClick={() => setOpenFilterModal((prev) => !prev)}
        />
        <FilterModal
          openFilterModal={openFilterModal}
          setOpenFilterModal={setOpenFilterModal}
        />
      </div>
      <ProductList
        setCartInArray={setCartInArray}
        setRefresh={setRefresh}
        cartCardData={cartCardData}
      />
    </div>
  );
};

export default ProductSection;
