import React from "react";

type EffectButtonType = {
  buttonName: string;
  theme?: {
    textClr?: string;
    borderClr?: string;
    hoverTextClr?: string;
    hoverBorderClr?: string;
    hoverBgClr?: string;
  };
};

const EffectButton = ({ buttonName, theme }: EffectButtonType) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-full border-2 border-${theme?.borderClr} px-4 py-2 hover:border-${theme?.hoverBorderClr} text-${theme?.textClr} hover:text-[${theme?.hoverTextClr}]`}
    >
      <span className={`relative z-10 font-semibold`}>{buttonName}</span>
      <span
        className={`duration-400 absolute inset-0 scale-0 rounded-full bg-${theme?.hoverBgClr} transition-transform group-hover:scale-100`}
      ></span>
    </button>
  );
};

export default EffectButton;
