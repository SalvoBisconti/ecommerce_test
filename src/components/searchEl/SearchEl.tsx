import { IoSearch } from "react-icons/io5";

const SearchEl = () => {
  return (
    <div className="flex items-center rounded border border-gray-300 gap-2 bg-white w-[60%] md:w-[40%] h-11">
      <div className="bg-secondColor h-full w-[36px] flex justify-center items-center cursor-pointer">
        <IoSearch />
      </div>
      <input
        type="text"
        className="outline-none text-slate-500 "
        placeholder="Item..."
      />
    </div>
  );
};

export default SearchEl;
