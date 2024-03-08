import Button from "../button";

const Filter = () => {
  const filterName: string[] = ["All", "Option1", "Option2", "Option3"];
  return (
    <div className="flex justify-center overflow-x-scroll gap-8 md:gap-14 ">
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
