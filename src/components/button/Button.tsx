const Button = (props: {
  text: string;
  fontSize: string;
  textColor: string;
  func: any | null;
}) => {
  const { text, fontSize, textColor, func } = props;

  return (
    <button
      className={`w-fit px-[8px] py-[4px] border-2 hover:bg-secondColor hover:text-white rounded transition-all duration-300 ${fontSize} ${textColor} ${
        text == "checkout" && "text-secondColor "
      } ${
        text == "Clear cart"
          ? "border-black hover:border-secondColor"
          : "border-secondColor"
      }`}
      onClick={func}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
