import { FaPhone } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = (props: { onHandleChangeStatus: any; cartCardData: any }) => {
  const { onHandleChangeStatus, cartCardData } = props;

  return (
    <div className="h-[70px] flex justify-between items-center bg-white p-5 z-50 fixed w-screen shadow shadow-firstColor ">
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/logo.svg"
        alt="logo"
      />
      <div className="w-[15vw] md:w-[23vw] flex justify-between items-center mr-14 [&>*]:text-mainDeskFont [&>*]:cursor-pointer">
        <h2
          className="flex gap-2 items-center "
          onClick={() => window.open("tel: +123 456 789")}
        >
          <FaPhone />
          <span className="text-mainMobFont hidden md:flex"> +123 456 789</span>
        </h2>
        <h2
          className="flex gap-2 items-center md:border border-black p-2 rounded relative "
          onClick={onHandleChangeStatus}
        >
          <div
            className={` ${
              cartCardData.length > 0 ? "absolute" : "hidden"
            } -top-2 -right-1 rounded-full bg-secondColor px-2 py-1 text-[10px] font-semibold`}
          >
            {" "}
            {cartCardData.length}
          </div>
          <FaCartShopping />
          <span className="text-mainMobFont hidden md:flex">
            {" - "}
            {cartCardData.length < 0
              ? "Empty cart"
              : `${cartCardData.length} ${
                  cartCardData.length == 1 ? "item" : "items"
                }`}{" "}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
