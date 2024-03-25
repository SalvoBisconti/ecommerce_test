import Button from "../button";
import SquareWithPhoto from "../squareWithPhoto";
import { useState, useEffect } from "react";
const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 100 && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [scrollPosition, animationStarted]);

  const translateX = animationStarted
    ? `${0 + (scrollPosition - 100) / 40}%`
    : "50%";

  const translateY = animationStarted
    ? `${0 + (scrollPosition - 100) / 60}%`
    : "50%";

  return (
    <div className="flex flex-col md:flex-row-reverse  md:w-[100%] justify-center md:gap-14 md:self-center py-20 px-4">
      <div className="flex flex-col">
        <div className="relative self-center ">
          {/* <SquareWithPhoto url="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/product-6.jpeg" /> */}
          <img
            id="photo"
            src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/product-6.jpeg"
            alt="Photo"
            className="block relative object-cover z-20 w-[300px] h-[260px] md:w-[360px] md:h-[300px]"
          />
          <div
            style={{
              transform: `translateX(${translateX}) translateY(${translateY}) `,
            }}
            className={`absolute -top-12 right-20 border-4 border-secondColor w-[300px] h-[260px] md:w-[360px] md:h-[300px] z-10 animate-slideIn`}
          ></div>
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
        <Button text="Explore" fontSize={null} textColor={null} func={null} />
      </div>
    </div>
  );
};

export default AboutSection;
