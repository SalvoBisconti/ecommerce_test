import List from "../list";
import PaymentList from "../paymentList";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col p-4 gap-4 justify-center items-center">
      <div className="w-screen bg-second flex flex-col md:flex-row md:justify-between gap-6  md:items-center p-6 md:p-14">
        <img
          src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/logo.svg"
          alt="logo"
          className=" text-red w-[50%] md:w-[30%] font-bold"
        />
        <div className=" flex flex-col gap-4 md:flex-row">
          <List
            itemName={["Home", "Chi siamo", "Contatti", "Lavora con noi"]}
          />
          <List
            itemName={[
              "Condizioni di vendita",
              "Pagamenti",
              "Certificazioni",
              "Sitemap",
            ]}
          />
          <List itemName={["Privacy Policy", "Cookie Policy", "Credits"]} />
        </div>
      </div>

      <div className="w-screen flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between px-2 md:px-14">
        <PaymentList />

        <h3>
          ITA
          <p className="font-bold rotate-180 inline-block pt-[2px] ">
            {" "}
            {" ^ "}
          </p>
        </h3>
      </div>
      <hr className="bg-secondColor shadow shadow-secondColorStrong h-[0.1px] w-screen border-0 " />
      <p className="text-[12px] text-center">
        ©2024 Realized by Salvo Bisconti
      </p>
    </div>
  );
};

export default Footer;
