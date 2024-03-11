import { FaPhone } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { cartProductType } from "@/mocks/types";

const Header = (props: {
  onHandleChangeStatus: any;
  cartCardData: cartProductType[];
}) => {
  const { onHandleChangeStatus, cartCardData } = props;

  let summ: number = 0;
  cartCardData &&
    cartCardData.map((element: cartProductType) =>
      element.quantity > 1
        ? (summ += element.price * element.quantity)
        : (summ += element.price)
    );
  return (
    <div
      className={`h-[70px] -top-[1px] flex justify-between  items-center bg-white p-5 z-50 fixed w-screen shadow shadow-firstColor transition-all duration-500 `}
    >
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/logo.svg"
        alt="logo"
      />
      <div className="w-[18vw] md:w-[44vw] sm:w-[20vw]  lg:w-[33vw] xl:w-[25vw] flex justify-between items-center md:mr-12 [&>*]:text-mainDeskFont [&>*]:cursor-pointer  ">
        <h2
          className="flex gap-2 items-center hover:text-secondColor transition-all duration-300 "
          onClick={() => window.open("tel: +123 456 789")}
        >
          <FaPhone className="text-[22px] md:text-[18px]" />
          <span className="text-mainMobFont hidden md:flex ">
            {" "}
            +123 456 789
          </span>
        </h2>
        <h2
          className="flex gap-2 items-center md:border border-black p-2 rounded relative md:hover:bg-secondColor hover:border-secondColorStrong hover:text-secondColor md:hover:text-white  transition-all duration-300 group "
          onClick={onHandleChangeStatus}
        >
          <div
            className={` ${
              cartCardData.length > 0 ? "absolute md:hidden" : "hidden"
            } -top-2 -right-1 rounded-full bg-secondColor px-[6px] py-[2px] text-[12px] font-semibold border-2 border-secondColor group-hover:text-black group-hover:border-black transition-all duration-300 cursor-pointer`}
          >
            {" "}
            {cartCardData.length}
          </div>
          <FaCartShopping className="text-[24px] md:text-[19px]" />
          <span className="text-mainMobFont hidden md:flex">
            {cartCardData.length == 0
              ? "Empty cart"
              : `${cartCardData.length} ${
                  cartCardData.length == 1 ? "item" : "items"
                } - ${summ.toFixed(2)} $`}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
