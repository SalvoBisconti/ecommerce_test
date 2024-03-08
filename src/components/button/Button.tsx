const Button = (props: {
  text: string;
  fontSize: string;
  textColor: string;
  func: any | null;
}) => {
  const { text, fontSize, textColor, func } = props;

  return (
    <button
      className={`w-fit px-[8px] py-[4px] border-2 border-black hover:bg-secondColor hover:text-white rounded ${fontSize} ${textColor}`}
      onClick={func}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
