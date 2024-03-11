const PopUp = (props: { isProductAdded: boolean }) => {
  const { isProductAdded } = props;
  return (
    <div
      className={` ${
        isProductAdded ? "top-16" : "-top-20"
      } px-4 py-2 fixed  bg-secondColor text-white rounded-xl  z-50 transition-all duration-500`}
    >
      <h2>Added to cart</h2>
    </div>
  );
};

export default PopUp;
