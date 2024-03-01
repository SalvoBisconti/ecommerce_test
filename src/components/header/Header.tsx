import { FaPhone } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="h-[70px] flex justify-between items-center p-5">
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/logo.svg"
        alt="logo"
      />
      <div className="w-[12vw] md:w-[20vw] flex justify-between items-center mr-14 [&>*]:text-mainDeskFont [&>*]:cursor-pointer">
        <h2 className="flex gap-2 items-center ">
          <FaPhone />
          <span className="text-mainMobFont hidden md:flex"> +123 456 789</span>
        </h2>
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Header;
