import React from "react";

export const DealBannerContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex items-center justify-between">{children}</div>;
};
