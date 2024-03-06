import Card from "../card";
import { GET } from "@/utils/funcs";
import { Dispatch, useEffect, useState } from "react";
import { productType } from "@/mocks/types";

const ProductList = (props: {
  setCartInArray: Dispatch<React.SetStateAction<any>>;
  setRefresh: Dispatch<React.SetStateAction<any>>;
  cartCardData: any;
}) => {
  const { setCartInArray, setRefresh, cartCardData } = props;

  const [productsData, setProductsData] = useState<productType[]>([]);
  useEffect(() => {
    GET("products.json").then((data) => setProductsData(data.items));
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-8">
      {productsData.map((element) => (
        <Card
          data={element}
          key={element.sys.id}
          setCartInArray={setCartInArray}
          setRefresh={setRefresh}
          cartCardData={cartCardData}
        />
      ))}
    </div>
  );
};

export default ProductList;
