import { FaCartShopping } from "react-icons/fa6";
import { productType } from "@/mocks/types";

const Card = (props: { data: productType }) => {
  const { data } = props;
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
        <h3>{data.fields.title}</h3>
        <h3> $ {data.fields.price}</h3>
        <div className="absolute -top-11 right-0 rounded-tl-[12px] bg-secondColor p-3 cursor-pointer transition-all duration-500 hover:text-white  ">
          <FaCartShopping className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
