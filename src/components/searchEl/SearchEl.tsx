import { IoSearch } from "react-icons/io5";

const SearchEl = () => {
  return (
    <div className="flex items-center rounded border border-gray-300 gap-2 bg-white">
      <div className="bg-secondColor h-[30px] w-[27px] flex justify-center items-center">
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
