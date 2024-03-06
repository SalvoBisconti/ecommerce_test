import { Dispatch } from "react";
import Button from "../button";
import CardCart from "../cardCart";
import { cartProductType } from "@/mocks/types";

const Cart = (props: {
  openModal: boolean;
  onHandleChangeStatus: any;
  cartCardData: cartProductType[];
  setCartCardData: Dispatch<React.SetStateAction<cartProductType[]>>;
}) => {
  const { openModal, onHandleChangeStatus, cartCardData, setCartCardData } =
    props;
  const buttonNames: string[] = ["Delete", "Buy"];
  let summ: number = 0;

  cartCardData &&
    cartCardData.map((element: cartProductType) => (summ += element.price));

  return (
    <div
      className={`  ${
        openModal ? "top-0" : "top-[-1000px]"
      }  w-screen  fixed top-[0px] z-30  `}
    >
      <div
        className={`${
          openModal ? "top-[70px]" : "top-[-1000px]"
        }  w-full min-h-[150px] max-h-[550px] overflow-y-scroll bg-white absolute transition-all duration-1000 flex  flex-col justify-center items-center gap-3 z-40 py-4 shadow shadow-secondColor`}
      >
        {cartCardData.length > 0 ? (
          <>
            {cartCardData.length > 0 &&
              cartCardData.map((element: cartProductType, i: number) => (
                <CardCart
                  data={element}
                  key={i}
                  setCartCardData={setCartCardData}
                  cartCardData={cartCardData}
                />
              ))}

            <h3>Total: $ {summ.toFixed(2)}</h3>
            <div className="flex gap-4">
              {buttonNames.map((element, index) => (
                <Button
                  text={element}
                  key={index + 1}
                  width=""
                  textColor=""
                  fontSize=""
                />
              ))}
            </div>
          </>
        ) : (
          <h3 className="italic text-gray-400 ">... empty cart</h3>
        )}
      </div>

      <div
        className={`${
          openModal ? "block" : "hidden"
        }  z-30 absolute top-0 w-screen h-screen`}
        onClick={onHandleChangeStatus}
      ></div>
    </div>
  );
};

export default Cart;
