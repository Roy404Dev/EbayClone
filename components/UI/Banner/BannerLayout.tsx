import React from "react";

const BannerLayout = ({
  children,
  bgImage,
  bgColor,
}: {
  children: React.ReactNode;
  bgImage?: string;
  bgColor?: string;
}) => {
  const style = bgImage ? { backgroundImage: `url("${bgImage}")` } : {};
  return (
    <div
      className={`${bgColor ? `bg-[${bgColor}]` : ""} relative mx-auto mb-5 flex h-80 w-full  max-w-[85em] flex-col items-start gap-4 rounded-2xl bg-cover bg-center px-7 py-4`}
      style={style}
    >
      {children}
    </div>
  );
};

export default BannerLayout;
