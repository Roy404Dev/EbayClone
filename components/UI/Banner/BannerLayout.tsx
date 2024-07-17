import React from "react";

const BannerLayout = ({
  children,
  bgProperties,
  height = "lg",
  rounded = true,
}: {
  children: React.ReactNode;
  bgProperties: {
    bgImage?: string;
    bgColor?: string;
    bgPosition?: string;
    maxWidthText?: string;
  };
  height?: "md" | "lg";
  rounded?: boolean;
}) => {
  const style = bgProperties.bgImage
    ? { backgroundImage: `url("${bgProperties.bgImage}")` }
    : {};
  const heights = {
    md: "h-48",
    lg: "h-80",
  };
  const customHeight = heights[height];
  console.log(customHeight);
  return (
    <div
      className={`${bgProperties.bgColor ? `bg-[${bgProperties.bgColor}]` : ""} relative mx-auto mb-5 flex max-${customHeight} h-full w-full flex-col items-start   gap-4 ${rounded ? "rounded-2xl" : "rounded-none"} bg-cover px-7 py-4  bg-${bgProperties.bgPosition}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default BannerLayout;
