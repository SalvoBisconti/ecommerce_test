import Filter from "../filter";
import SearchEl from "../searchEl";
import ProductList from "../productList";
import { Dispatch } from "react";
import { cartProductType } from "@/mocks/types";

const ProductSection = (props: {
  setCartInArray: Dispatch<React.SetStateAction<cartProductType[]>>;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
  cartCardData: cartProductType[];
}) => {
  const { setCartInArray, setRefresh, cartCardData } = props;
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-firstColor ">
      <h3 className="text-mobileTitle md:text-deskTitle font-bold">
        Our{" "}
        <span className="text-strongMobTitle md:text-strongDeskTitle font-black text-secondColor">
          Store
        </span>
      </h3>
      <Filter />
      <SearchEl />
      <ProductList
        setCartInArray={setCartInArray}
        setRefresh={setRefresh}
        cartCardData={cartCardData}
      />
    </div>
  );
};

export default ProductSection;
