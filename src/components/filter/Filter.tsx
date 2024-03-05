import Button from "../button";

const Filter = () => {
  const filterName: string[] = ["Porta", "Finestra", "Letto"];
  return (
    <div className="flex overflow-x-scroll gap-4">
      {filterName.map((element, index) => (
        <Button
          text={element}
          key={index + 1}
          width=""
          textColor=""
          fontSize=""
        />
      ))}
    </div>
  );
};

export default Filter;
