import React, { useState, useEffect } from "react";

const SquareWithPhoto = (props: { url: string }) => {
  const { url } = props;
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
  }, [scrollPosition]);

  const translateX = `${0 + (scrollPosition - 100) / 45}%`;

  const translateY = `${0 + (scrollPosition - 100) / 50}%`;

  return (
    <>
      <img
        id="photo"
        src={url}
        alt="Photo"
        className="block relative object-cover z-20 w-[300px] h-[260px] md:w-[360px] md:h-[300px]"
      />
      <div
        style={{
          transform: `translateX(${translateX}) translateY(${translateY}) `,
        }}
        className={`absolute -top-12 right-20 border-4 border-secondColor w-[300px] h-[260px] md:w-[360px] md:h-[300px] z-10 animate-slideIn`}
      ></div>
    </>
  );
};
export default SquareWithPhoto;
