const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button className="px-[8px] py-[4px] border-2 border-black hover:bg-black hover:text-secondColor">
      {text}
    </button>
  );
};

export default Button;
