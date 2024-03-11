import { Dispatch } from "react";
import { FaTrash } from "react-icons/fa";
import { cartProductType } from "@/mocks/types";

const CardCart = (props: {
  data: cartProductType;
  setCartCardData: Dispatch<React.SetStateAction<cartProductType[]>>;
  cartCardData: cartProductType[];
}) => {
  const { data, setCartCardData, cartCardData } = props;
  const onHandleDelete = () => {
    setCartCardData(
      cartCardData.filter((element: cartProductType) => element.id != data.id)
    );
    localStorage.setItem("cart", JSON.stringify(cartCardData));
  };

  return (
    <div className="flex justify-between items-center shadow shadow-firstColor p-2 w-full px-10 ">
      <img
        src={data.image}
        alt="product"
        className="rounded-full h-[60px] w-[60px] object-cover "
      />
      <div className="flex flex-col grow pl-4">
        <h3> {data.name}</h3>
        <h3>$ {data.price}</h3>
      </div>
      <h3>qty: {data.quantity}</h3>
      <FaTrash
        className="text-secondColor cursor-pointer transition-all duration-500 hover:text-black ml-2"
        onClick={onHandleDelete}
      />
    </div>
  );
};

export default CardCart;
