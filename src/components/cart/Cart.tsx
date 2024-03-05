import Button from "../button";
import CardCart from "../cardCart";

const Cart = (props: { openModal: boolean; onHandleChangeStatus: any }) => {
  const { openModal, onHandleChangeStatus } = props;
  const buttonNames: string[] = ["Delete", "Buy"];

  return (
    <div
      className={`  ${
        openModal ? "top-[70px]" : "top-[-1000px]"
      }  w-screen h-full fixed top-[0px] z-40`}
    >
      <div
        className={`${
          openModal ? "top-[70px]" : "top-[-1000px]"
        }  w-full min-h-[150px]  bg-white absolute transition-all duration-1000 flex  flex-col justify-center items-center gap-3 z-40 py-4`}
      >
        <CardCart />
        <h3>Total: </h3>
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
