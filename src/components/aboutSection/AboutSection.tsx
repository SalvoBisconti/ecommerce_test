import Button from "../button";
import SquareWithPhoto from "../squareWithPhoto";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  md:w-[100%] justify-center md:gap-14 md:self-center py-20 px-4">
      <div className="flex flex-col">
        <div className="relative self-center ">
          <SquareWithPhoto url="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/product-6.jpeg" />
        </div>
      </div>
      <div className="flex flex-col gap-4  p-4 md:w-[40vw] h-[100%]">
        <h3 className="text-mobileTitle md:text-deskTitle font-bold">
          About{" "}
          <span className="text-strongMobTitle md:text-strongDeskTitle font-black text-secondColor">
            Us
          </span>
        </h3>
        <p className="text-paragraphMob md:text-paragraphDesk italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          nostrum ipsum eveniet, adipisci consequuntur aperiam corporis sequi,
          dolor voluptas doloribus, iusto ducimus quidem nam! Harum.
        </p>
        <Button text="Explore" fontSize="" textColor="" func={null} />
      </div>
    </div>
  );
};

export default AboutSection;
