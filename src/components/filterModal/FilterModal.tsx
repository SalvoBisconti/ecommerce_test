import { IoFilterCircleOutline } from "react-icons/io5";
import Filter from "../filter";
import { Dispatch } from "react";

const FilterModal = (props: {
  openFilterModal: boolean;
  setOpenFilterModal: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { openFilterModal, setOpenFilterModal } = props;

  const onClickCloseFilter = () => setOpenFilterModal((prev) => !prev);
  return (
    <div
      className={`
      ${openFilterModal ? "bottom-0" : "bottom-[-1000px]"}
       w-screen h-screen fixed flex z-30  flex-col  items-center transition-all duration-500 `}
    >
      <div
        className="bg-trasparent h-[50%] w-full z-40 cursor-pointer "
        onClick={onClickCloseFilter}
      ></div>
      <div
        className={`
         bg-white h-[50%] flex flex-col gap-4 w-[98vw] rounded-t-xl p-6 shadow-lg shadow-secondColor z-50`}
      >
        <div className="w-full flex justify-between text-mobileTitle">
          <div className="flex items-center gap-2">
            <IoFilterCircleOutline className="text-deskTitle" />
            <h3>FILTER</h3>
          </div>
          <h3 className="hover:text-secondColor" onClick={onClickCloseFilter}>
            X
          </h3>
        </div>
        <h3 className="text-mainDeskFont">CATEGORIES</h3>
        <Filter flexDirection="flex-col" gap="gap-[10px]" />
      </div>
    </div>
  );
};

export default FilterModal;
