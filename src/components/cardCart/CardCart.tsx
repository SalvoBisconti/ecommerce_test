import { FaTrash } from "react-icons/fa";

const CardCart = () => {
  return (
    <div className="flex justify-evenly items-center shadow shadow-firstColor p-2 w-full">
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/product-1.jpeg"
        alt="product"
        className="rounded-full h-[60px] w-[60px] object-cover "
      />
      <div className="flex flex-col">
        <h3>Prezzo</h3>
        <h3>Quantità</h3>
      </div>
      <FaTrash className="text-secondColor cursor-pointer" />
    </div>
  );
};

export default CardCart;
