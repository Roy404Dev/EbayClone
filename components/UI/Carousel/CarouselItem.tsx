import React from "react";
import EffectButton from "../Buttons/EffectButton";

type carouselItemTypes = {
  title: string;
  sub: string;
  buttonName: string;
  order: number;
  imageIndex: number;
  background: string;
};

const CarouselItem = ({
  title,
  sub,
  buttonName,
  order,
  imageIndex,
  background,
}: carouselItemTypes) => {
  return (
    <div
      className={`h-full w-full rounded-2xl ${background} shrink-0 grow-0 bg-cover bg-center px-8 py-4 duration-[350ms] ease-in-out`}
      data-order={order}
      id="carousel-image"
      style={{ translate: `${-100 * imageIndex}%` }}
    >
      <div className="flex flex-col items-start justify-items-start gap-5 ">
        <div className="max-w-80 w-full">
          <span className="text-4xl font-bold">{title}</span>
        </div>
        <p className="text-xl">{sub}</p>
        <EffectButton buttonName={buttonName} theme="blue" />
      </div>
    </div>
  );
};

export default CarouselItem;
