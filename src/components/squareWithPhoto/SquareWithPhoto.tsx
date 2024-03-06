import React, { useState, useEffect } from "react";

interface Offset {
  x: number;
  y: number;
}

const SquareWithPhoto = (props: { url: string }) => {
  const { url } = props;
  const [scrollY, setScrollY] = useState(0);
  const [offset, setOffset] = useState({ right: 0, bottom: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageRect = document.getElementById("photo")?.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const diffY = (viewportHeight - (imageRect?.height ?? 0)) / 2;
    const diffX = (window.innerWidth - (imageRect?.width ?? 0)) / 2;

    const maxScroll = imageRect!.height - viewportHeight;

    const right = diffX;
    const bottom = diffY + Math.min(maxScroll, scrollY);
    setOffset({ right, bottom });
  }, [scrollY]);

  return (
    <div className="relative">
      <img
        id="photo"
        src={url}
        alt="Photo"
        className="block relative object-cover z-30 w-[300px] h-[300px]"
        // style={{
        //   marginBottom: `${scrollY / 5}px`,
        // }}
      />
      <div
        className={`absolute -top-12 right-20 border-4 border-secondColor w-[300px] h-[300px] transition-all z-20 `}
      ></div>
    </div>
  );
};

export default SquareWithPhoto;
