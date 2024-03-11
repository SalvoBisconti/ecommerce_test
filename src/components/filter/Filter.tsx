import Button from "../button";

const Filter = (props: { flexDirection: string; gap: string }) => {
  const { flexDirection, gap } = props;
  const filterName: string[] = ["All", "Option1", "Option2", "Option3"];

  return (
    <div
      className={`flex justify-center overflow-x-scroll  md:gap-14 ${gap} ${flexDirection} `}
    >
      {filterName.map((element, index) => (
        <Button
          text={element}
          key={index + 1}
          textColor=""
          fontSize=""
          func={null}
        />
      ))}
    </div>
  );
};

export default Filter;
