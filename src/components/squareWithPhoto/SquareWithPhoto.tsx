import React, { useState, useEffect, useRef } from "react";

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

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  useEffect(() => {
    if (scrollPosition >= 100 && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [scrollPosition, animationStarted]);

  // Calculate the translateX value based on the scroll position
  const translateX = animationStarted
    ? `${0 + (scrollPosition - 100) / 40}%`
    : "50%";

  return (
    <>
      <img
        id="photo"
        src={url}
        alt="Photo"
        className="block relative object-cover z-20 w-[300px] h-[260px] md:w-[360px] md:h-[300px]"
      />
      <div
        style={{ transform: `translateX(${translateX})` }}
        className={`absolute -top-12 right-20 border-4 border-secondColor w-[300px] h-[260px] md:w-[360px] md:h-[300px] z-10 animate-slideIn`}
      ></div>
    </>
  );
};
export default SquareWithPhoto;
