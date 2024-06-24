import React from "react";

type EffectButtonType = {
  buttonName: string;
  theme: "white" | "black" | "blue";
  additionalClassName?: string;
};

const EffectButton = ({
  buttonName,
  theme,
  additionalClassName,
}: EffectButtonType) => {
  const buttonVariants = {
    black: "border-black hover:border-black text-black hover:text-white",
    white: "border-white hover:border-white text-white hover:text-black",
    blue: "border-black hover:border-indigo-500 text-black hover:text-white",
  };

  const buttonVariantsSpan = {
    black: "bg-black",
    white: "bg-white",
    blue: "bg-indigo-500",
  };

  return (
    <button
      className={`group relative overflow-hidden rounded-full border-2 px-4 py-2 ${buttonVariants[theme]} ${additionalClassName}`}
    >
      <span className={`relative z-10 font-semibold`}>{buttonName}</span>
      <span
        className={`duration-400 absolute inset-0 scale-0 rounded-full ${buttonVariantsSpan[theme]} transition-transform group-hover:scale-100`}
      ></span>
    </button>
  );
};

export default EffectButton;
