import { Dispatch } from "react";
import { FaPhone } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = (props: { onHandleChangeStatus: any }) => {
  const { onHandleChangeStatus } = props;

  return (
    <div className="h-[70px] flex justify-between items-center bg-white p-5 z-50 fixed w-screen ">
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/logo.svg"
        alt="logo"
      />
      <div className="w-[15vw] md:w-[23vw] flex justify-between items-center mr-14 [&>*]:text-mainDeskFont [&>*]:cursor-pointer">
        <h2 className="flex gap-2 items-center ">
          <FaPhone />
          <span className="text-mainMobFont hidden md:flex"> +123 456 789</span>
        </h2>
        <h2 className="flex gap-2 items-center md:border border-black p-2 rounded ">
          <FaCartShopping onClick={onHandleChangeStatus} />
          <span className="text-mainMobFont hidden md:flex">
            {" - "}
            {0 < 1 ? "Empty cart" : "elementi"}{" "}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
