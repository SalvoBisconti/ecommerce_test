import Button from "../button";

const Filter = (props: {
  display: string;
  width: string | null;
  gap: string;
}) => {
  const { display, width, gap } = props;
  const filterName: string[] = ["All", "Option_1", "Option_2", "Option_3"];

  return (
    <div
      className={` flex-wrap justify-center overflow-x-scroll md:gap-14 ${display} ${gap} ${width} `}
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
