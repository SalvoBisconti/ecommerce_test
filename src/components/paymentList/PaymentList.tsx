import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";

const PaymentList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 text-[26px] text-[#cb8544]">
      <li>
        <RiVisaLine />
      </li>
      <li>
        <FaCcMastercard />
      </li>
      <li>
        <SiAmericanexpress />
      </li>
      <li>
        <FaCcPaypal />
      </li>
      <li>
        <FaApplePay />
      </li>
      <li>
        <FaGooglePay />
      </li>
      <li>
        <RiVisaFill />
      </li>
      <li>
        <FaCcMastercard />
      </li>
    </ul>
  );
};

export default PaymentList;
