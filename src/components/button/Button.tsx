const Button = (props: {
  text: string;
  fontSize: string;
  textColor: string;
  width: string;
}) => {
  const { text, fontSize, textColor, width } = props;
  return (
    <button
      className={`px-[8px] py-[4px] border-2 border-black hover:bg-black hover:text-secondColor ${fontSize} ${textColor} ${width}`}
      onClick={() => localStorage.removeItem("cart")}
    >
      {text}
    </button>
  );
};

export default Button;
