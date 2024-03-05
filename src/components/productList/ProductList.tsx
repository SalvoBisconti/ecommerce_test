import Card from "../card";
import { GET } from "@/utils/funcs";
import { useEffect, useState } from "react";
import { productType } from "@/mocks/types";

const ProductList = () => {
  const [productsData, setProductsData] = useState<productType[]>([]);
  useEffect(() => {
    GET("products.json").then((data) => setProductsData(data.items));
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-8">
      {productsData.map((element) => (
        <Card data={element} key={element.sys.id} />
      ))}
    </div>
  );
};

export default ProductList;
