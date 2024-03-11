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
    cartCardData.map((element: cartProductType) =>
      element.quantity > 1
        ? (summ += element.price * element.quantity)
        : (summ += element.price)
    );

  const onClickClearCart = (text: string) => {
    if (text == "Delete") {
      setCartCardData([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className={`w-screen fixed top-[0px] z-30`}>
      <div
        className={`${
          openModal
            ? " right-0 "
            : " md:top-[70px] right-[-1000px] [transform:rotateX(360deg)] "
        }  w-full min-h-[150px] top-[70px] max-h-[550px] md:w-[33vw] overflow-y-scroll bg-white absolute transition-all duration-1000 ease-in-out flex flex-col justify-center items-center gap-3 z-40 py-4 shadow shadow-secondColor rounded-b`}
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
                  textColor=""
                  fontSize=""
                  func={() => onClickClearCart(element)}
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
