import Button from "../button";
import { motion, useAnimation } from "framer-motion";
import SquareWithPhoto from "../squareWithPhoto";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse  md:w-[100%] justify-center md:gap-14 md:self-center py-20">
      <div className="flex flex-col">
        <div className="relative self-center ">
          {/* <img
            src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/product-6.jpeg"
            alt="square image"
            className="w-[60vw] h-[50vw] md:h-[22vw] md:w-[40vw] object-cover "
          />
          <motion.div
            animate={{ x: 100 }}
            initial={{ x: 0 }}
            className="absolute top-0"
          >
            <div className="w-[60vw] h-[50vw] md:h-[22vw] md:w-[40vw] border-4 border-secondColor absolute -top-4 -left-4	"></div>
          </motion.div> */}
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
        <Button text="Explore" fontSize="" textColor="" width="w-20" />
      </div>
    </div>
  );
};

export default AboutSection;
