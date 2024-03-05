import Filter from "../filter";
import SearchEl from "../searchEl";
import ProductList from "../productList";
const ProductSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center ">
      <h3 className="text-mobileTitle md:text-deskTitle font-bold">
        Our{" "}
        <span className="text-strongMobTitle md:text-strongDeskTitle font-black text-secondColor">
          Store
        </span>
      </h3>
      <Filter />
      <SearchEl />
      <ProductList />
    </div>
  );
};

export default ProductSection;
