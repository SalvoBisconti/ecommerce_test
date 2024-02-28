import Button from "../button";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative ">
      <img
        src="https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/hero-bcg.jpeg"
        alt="hero image"
        className="absolute top-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full z-20 bg-[#0000004d]"></div>
      <div className="w-[60vw] md:w-[30vw] flex flex-col justify-center items-center gap-3 z-30  border-2">
        <h3>
          Welcome to Comfy<span>House</span>
        </h3>
        <Button text="Explore" />
      </div>
    </div>
  );
};

export default Hero;
