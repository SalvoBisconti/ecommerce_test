import Card from "../card";
import { GET } from "@/utils/funcs";
import { Dispatch, useEffect, useState } from "react";
import { productType } from "@/mocks/types";
import { cartProductType } from "@/mocks/types";

const ProductList = (props: {
  setCartInArray: Dispatch<React.SetStateAction<cartProductType[]>>;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
  cartCardData: cartProductType[];
  setIsProductAdded: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setCartInArray, setRefresh, cartCardData, setIsProductAdded } = props;

  const [productsData, setProductsData] = useState<productType[]>([]);
  useEffect(() => {
    GET("products.json").then((data) => setProductsData(data.items));
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-8 py-6">
      {productsData.map((element) => (
        <Card
          data={element}
          key={element.sys.id}
          setCartInArray={setCartInArray}
          setRefresh={setRefresh}
          cartCardData={cartCardData}
          setIsProductAdded={setIsProductAdded}
        />
      ))}
    </div>
  );
};

export default ProductList;
