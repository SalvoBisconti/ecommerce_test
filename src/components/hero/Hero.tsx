import Button from "../button";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative bg-parallax bg-fixed bg-cover">
      <div className="absolute top-0 w-full h-full z-20 bg-[#0000004d]"></div>
      <div className="w-[90vw] md:w-[50vw] flex flex-col justify-center items-center gap-3 z-30">
        <h3 className="text-mobileTitle md:text-deskTitle  lg:text-strongDeskTitle  font-bold text-white">
          Welcome to{" "}
          <span className="text-strongMobTitle md:text-strongDeskTitle lg:text-veryStrongDeskTitle  font-black text-secondColor">
            ComfyHouse
          </span>
        </h3>
        <Button
          text="Explore"
          fontSize="text-mainMobFont md:text-mainDeskFont"
          textColor="text-white border-white"
          func={null}
        />
      </div>
    </div>
  );
};

export default Hero;
