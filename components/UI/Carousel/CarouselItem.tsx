import React from "react";

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
        <div className="w-80">
          <span className="text-4xl font-bold">{title}</span>
        </div>
        <p className="text-xl">{sub}</p>
        <button className="group relative overflow-hidden rounded-full border-2 border-gray-900 px-4 py-2 hover:border-indigo-500 hover:text-white">
          <span className="relative z-10 font-semibold">{buttonName}</span>
          <span className="duration-400 absolute inset-0 scale-0 rounded-full bg-indigo-500 transition-transform group-hover:scale-100"></span>
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
