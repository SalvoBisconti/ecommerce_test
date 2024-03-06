import { Dispatch } from "react";
import { FaTrash } from "react-icons/fa";

const CardCart = (props: {
  data: any;
  setCartCardData: Dispatch<React.SetStateAction<any>>;
  cartCardData: any;
}) => {
  const { data, setCartCardData, cartCardData } = props;
  const onHandleDelete = () => {
    setCartCardData(
      cartCardData.filter((element: any) => element.id != data.id)
    );
  };
  return (
    <div className="flex justify-evenly items-center shadow shadow-firstColor p-2 w-full">
      <img
        src={data.image}
        alt="product"
        className="rounded-full h-[60px] w-[60px] object-cover "
      />
      <div className="flex flex-col">
        <h3> {data.name}</h3>
        <h3>$ {data.price}</h3>
      </div>
      <FaTrash
        className="text-secondColor cursor-pointer transition-all duration-500 hover:text-black"
        onClick={onHandleDelete}
      />
    </div>
  );
};

export default CardCart;
