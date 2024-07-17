import React from "react";

const BannerSub = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={className + ' text-[#191919] font-semibold text-clamp'}>{children}</p>;
};

export default BannerSub;
