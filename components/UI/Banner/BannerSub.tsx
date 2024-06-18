import React from "react";

const BannerSub = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={className}>{children}</p>;
};

export default BannerSub;
