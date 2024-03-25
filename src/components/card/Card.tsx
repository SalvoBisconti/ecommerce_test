import { FaCartShopping } from "react-icons/fa6";
import { productType } from "@/mocks/types";
import { Dispatch } from "react";
import { cartProductType } from "@/mocks/types";

const Card = (props: {
  data: productType;
  setCartCardData: Dispatch<React.SetStateAction<cartProductType[]>>;
  setRefresh: Dispatch<React.SetStateAction<boolean>>;
  cartCardData: cartProductType[];
  setIsProductAdded: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, setRefresh, cartCardData, setIsProductAdded, setCartCardData } =
    props;

  const onHandleAddToCart = (element: cartProductType) => {
    setRefresh((prev: any) => !prev);

    let isProductInCart;
    if (cartCardData.length > 0) {
      isProductInCart = cartCardData.find((finded) => finded.id == element.id);
      if (isProductInCart) {
        const prevQty: any = cartCardData.find(
          (quantity) => quantity.id === element.id
        );

        const updatedQty = {
          id: element.id,
          name: element.name,
          price: element.price,
          image: element.image,
          quantity: prevQty.quantity + element.quantity,
        };
        const finalArray = cartCardData.filter(
          (product) => product.id !== element.id
        );
        finalArray.length > 0
          ? localStorage.setItem(
              "cart",
              JSON.stringify([...finalArray, updatedQty])
            )
          : localStorage.setItem("cart", JSON.stringify([updatedQty]));
      } else {
        setCartCardData((prev: cartProductType[]) => [...prev, element]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartCardData, element])
        );
      }
    } else {
      setCartCardData([element]);
      localStorage.setItem("cart", JSON.stringify([element]));
    }

    setIsProductAdded(true);
    setTimeout(() => setIsProductAdded(false), 1500);
  };

  return (
    <div className="border border-grey-300 h-[300px] w-[300px] relative flex flex-col rounded ">
      <div className="overflow-hidden w-full h-full rounded ">
        <img
          src={data.fields.image.fields.file.url}
          alt={data.fields.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110 rounded "
        />
      </div>
      <div className="flex justify-between p-5  bottom-0 bg-white w-full font-semibold relative">
        <h3>
          {data.fields.title[0].toLocaleUpperCase() +
            data.fields.title.substring(1, data.fields.title.length)}
        </h3>
        <h3> $ {data.fields.price}</h3>
        <div
          className="absolute -top-[54px] md:-top-[42px] right-0 rounded-tl-[12px] bg-secondColor p-4 md:p-3 cursor-pointer transition-all duration-500 hover:text-white  "
          onClick={() =>
            onHandleAddToCart({
              id: data.sys.id,
              name: data.fields.title,
              price: data.fields.price,
              image: data.fields.image.fields.file.url,
              quantity: 1,
            })
          }
        >
          <FaCartShopping className="text-[22px] md:text-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
